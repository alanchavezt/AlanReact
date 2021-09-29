require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const utils = require('./utils');
const axios = require("axios");
const bcrypt = require('bcrypt');

const app = express();
const router = express.Router();
const port = process.env.PORT || 4000;
const API = "http://localhost:8080";


// enable CORS
app.use(cors());
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'public')));


// Sign Up request API handlers
app.post('/REST/signup', async (req, res, next)=>{
    console.log('user: ', req.body);

    try {
        const user = req.body;
        // const hashedPassword = await bcrypt.hash(req.body.password, 10);
        // user.password = hashedPassword;

        const response = await axios.post("http://localhost:8080/REST/signup", user);

        // res.status(200);
        res.status(201).send();
        res.set("Connection", "close");
        res.json(response.data);
    } catch {
        res.status(500).send();
        res.json("Error occurred!");
    }
});




// User request API handlers
app.get('/REST/users', (req, res) => {
    const authorization = "Bearer " + req.headers.authorization;

    axios.get(`${API}/REST/users`,{
        headers: {'authorization': authorization}
    }).then(response => {
        res.status(200);
        res.set("Connection", "close");
        res.json(response.data);
    }).catch(error => {
        res.json("Error occurred: " + error);
    });
});

app.get('/REST/users/:id', (req, res) => {
    console.log('User ID:', req.params.id)
    const userId =  req.params.id;
    const authorization = "Bearer " + req.headers.authorization;

    axios.get(`${API}/REST/users/${userId}`, {
        headers: {'authorization': authorization}
    }).then(response => {
        res.status(200);
        res.set("Connection", "close");
        res.json(response.data);
    }).catch(error => {
        res.json("Error occurred!")
    });
});

app.put('/REST/users/:id', async (req, res)=>{
    console.log('id: ', req.params.id);
    const authorization = "Bearer " + req.headers.authorization;

    try {
        const userId = req.params.id;
        const user = req.body;
        // const hashedPassword = await bcrypt.hash(req.body.password, 10);
        // user.password = hashedPassword;

        const response = await axios.put(`${API}/REST/users/${userId}`, user, {
            headers: {'authorization': authorization}
        });

        // res.status(200);
        res.status(201);
        res.set("Connection", "close");
        res.json(response.data);
    } catch {
        res.status(500).send();
        res.json("Error occurred!");
    }
});


app.post('/REST/users', async (req, res, next)=>{
    console.log('user: ', req.body);
    const authorization = "Bearer " + req.headers.authorization;

    try {
        const user = req.body;
        // const hashedPassword = await bcrypt.hash(req.body.password, 10);
        // user.password = hashedPassword;

        const response = await axios.post(`${API}/REST/users`, user, {
            headers: {'authorization': authorization}
        });

        // res.status(200);
        res.status(201);
        res.set("Connection", "close");
        res.json(response.data);
    } catch {
        res.status(500).send();
        res.json("Error occurred!");
    }
});

app.delete('/REST/users/:id', (req, res)=>{
    console.log('userId: ', req.params.id);
    const userId = req.params.id;
    const authorization = "Bearer " + req.headers.authorization;

    axios.delete(`${API}/REST/users/${userId}`, {
        headers: {'authorization': authorization}
    }).then(response => {
        res.status(200);
        res.set("Connection", "close");
        res.json(response.data);
    }).catch(error => {
        res.json("Error occurred!")
    });
});


//middleware that checks if JWT token exists and verifies it if it does exist.
//In all future routes, this helps to know if the request is authenticated or not.
app.use( (req, res, next) => {
    // check header or url parameters or post parameters for token
    let token = req.headers['authorization'];
    if (!token) return next(); //if no token, continue
    next();

    // token = token.replace('Bearer ', '');
    // jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
    //     if (err) {
    //         return res.status(401).json({
    //             error: true,
    //             message: "(Unauthorized) Invalid user."
    //         });
    //     } else {
    //         //set the user to req so other routes can use it
    //         req.user = user;
    //         next();
    //     }
    // });
});

// Error-handling middleware
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

// request handlers
app.get('/', (req, res) => {
    if (!req.user) return res.status(401).json({ success: false, message: 'Invalid user to access it.' });
    res.send('Welcome to the Node.js! - ' + req.user.name);
});


// Sign In request: validate the user credentials
app.post('/REST/auth/signin', async (req, res) => {
    // const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    // return 400 status if username/password does not exist
    if (!email || !password) {
        return res.status(400).json({
            error: true,
            message: "Username or Password required."
        });
    }

    try {
        const response = await axios.post("http://localhost:8080/REST/auth", {email, password});
        const token = response.data.token;
        const user = response.data.user;

        // const userObj = utils.getCleanUser(user);
        return res.json({user, token});

        // return 401 status if the credential does not match.
        // if(await bcrypt.compare(req.body.password, user.password)) {
        //     res.status(200);
        //     res.set("Connection", "close");
        //
        //     // todo save token in the database
        //     // generate token, get basic user details and return the token along with user details
        //     const token = utils.generateToken(user);
        //     const userObj = utils.getCleanUser(user);
        //     return res.json({user: userObj, token});
        // } else {
        //     return res.status(401).json({
        //         error: true,
        //         message: "Username or Password is Wrong."
        //     });
        // }
    } catch(error) {
        res.status(500);
        res.json("Error occurred: " + error);
    };
});


// verify the token and return it if it's valid
app.get('/verifyToken', function (req, res) {

    // check header or url parameters or post parameters for token
    const token = req.body.token || req.query.token;

    if (!token) {
        return res.status(400).json({
            error: true,
            message: "Token is required."
        });
    }

    return res.json({ user: {}, token });

    // check token that was passed by decoding token using secret
    // jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
    //     if (err) return res.status(401).json({
    //         error: true,
    //         message: "Invalid token."
    //     });
    //
    //     // todo: retrieve the token from the database and compare tokens
    //     // return 401 status if the userId does not match.
    //     if (user.userId !== userData.userId) {
    //         return res.status(401).json({
    //             error: true,
    //             message: "Invalid user."
    //         });
    //     }
    //
    //     const userObj = utils.getCleanUser(userData);
    //     return res.json({ user: userObj, token });
    // });
});

app.listen(port, () => {
    console.log('Server started on: ' + port);
});
