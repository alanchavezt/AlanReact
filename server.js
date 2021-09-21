require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const utils = require('./utils');
const axios = require("axios");

const app = express();
const router = express.Router();
const port = process.env.PORT || 4000;

// static user details
const userData = {
    userId: "117711",
    password: "123456",
    name: "Alan Chavez",
    username: "alanch",
    email: "alanchavez1@gmail.com",
    isAdmin: true
};

// enable CORS
app.use(cors());
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'public')));


// Sign Up request API handlers
app.post('/REST/signup', (req, res, next)=>{
    console.log('user: ', req.body);
    const user = req.body;

    axios.post("http://localhost:8080/REST/signup", user).then(response => {
        res.status(200);
        res.set("Connection", "close");
        res.json(response.data);
    }).catch(error => {
        res.json("Error occurred!")
    });
});

// User request API handlers
app.get('/REST/users', (req, res) => {
    axios.get("http://localhost:8080/REST/users").then(response => {
        res.status(200);
        res.set("Connection", "close");
        res.json(response.data);
    }).catch(error => {
        res.json("Error occurred!")
    });
});

app.get('/REST/users/:id', (req, res) => {
    console.log('User ID:', req.params.id)
    const userId =  req.params.id;

    axios.get("http://localhost:8080/REST/users/" + userId).then(response => {
        res.status(200);
        res.set("Connection", "close");
        res.json(response.data);
    }).catch(error => {
        res.json("Error occurred!")
    });
});

app.put('/REST/users/:id', (req, res)=>{
    console.log('id: ', req.params.id);
    const userId = req.params.id;
    const user = req.body;

    axios.put("http://localhost:8080/REST/users/" + userId, user).then(response => {
        res.status(200);
        res.set("Connection", "close");
        res.json(response.data);
    }).catch(error => {
        res.json("Error occurred!")
    });
});


app.post('/REST/users', (req, res, next)=>{
    console.log('user: ', req.body);
    const user = req.body;

    axios.post("http://localhost:8080/REST/users", user).then(response => {
        res.status(200);
        res.set("Connection", "close");
        res.json(response.data);
    }).catch(error => {
        res.json("Error occurred!")
    });
});

app.delete('/REST/users/:id', (req, res)=>{
    console.log('userId: ', req.params.id);
    const userId = req.params.id;

    axios.delete(`http://localhost:8080/REST/users/${userId}`).then(response => {
        res.status(200);
        res.set("Connection", "close");
        res.json(response.data);
    }).catch(error => {
        res.json("Error occurred!")
    });
});


//middleware that checks if JWT token exists and verifies it if it does exist.
//In all future routes, this helps to know if the request is authenticated or not.
app.use(function (req, res, next) {
    // check header or url parameters or post parameters for token
    let token = req.headers['authorization'];
    if (!token) return next(); //if no token, continue

    token = token.replace('Bearer ', '');
    jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
        if (err) {
            return res.status(401).json({
                error: true,
                message: "(Unauthorized) Invalid user."
            });
        } else {
            //set the user to req so other routes can use it
            req.user = user;
            next();
        }
    });
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
app.post('/users/signin', function (req, res) {
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

    const auth = {
        email: email,
        password: password
    };

    axios.post("http://localhost:8080/REST/signin", auth).then(response => {
        const user = response.data;

        // return 401 status if the credential does not match.
        if (email !== user.email || password !== user.password) {
            return res.status(401).json({
                error: true,
                message: "Username or Password is Wrong."
            });
        }

        res.status(200);
        res.set("Connection", "close");

        // generate token
        const token = utils.generateToken(user);
        // get basic user details
        const userObj = utils.getCleanUser(user);
        // return the token along with user details
        return res.json({ user: userObj, token });
        // res.json(response.data);
    }).catch(error => {
        res.json("Error occurred: " + error)
    });
});


// verify the token and return it if it's valid
app.get('/verifyToken', function (req, res) {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token;
    if (!token) {
        return res.status(400).json({
            error: true,
            message: "Token is required."
        });
    }

    // check token that was passed by decoding token using secret
    jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
        if (err) return res.status(401).json({
            error: true,
            message: "Invalid token."
        });

        // return 401 status if the userId does not match.
        if (user.userId !== userData.userId) {
            return res.status(401).json({
                error: true,
                message: "Invalid user."
            });
        }
        // get basic user details
        var userObj = utils.getCleanUser(userData);
        return res.json({ user: userObj, token });
    });
});

app.listen(port, () => {
    console.log('Server started on: ' + port);
});
