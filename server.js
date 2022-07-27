require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const utils = require('./utils');
const axios = require("axios");
const bcrypt = require('bcrypt');
const fs = require("fs");

const signupRoutes = require('./src/routes/signupRoutes');
const authRoutes = require('./src/routes/authRoutes');
const userPasswordRoutes = require('./src/routes/userPasswordRoutes');
const userRoutes = require('./src/routes/userRoutes');
const roleRoutes = require('./src/routes/roleRoutes');
const userRolesRoutes = require('./src/routes/userRolesRoutes');
const resumeRoutes = require('./src/routes/resumeRoutes');

const app = express();
const port = process.env.PORT || 4000;
// const API = process.env.API_URL || "http://localhost:8080";

// enable CORS
app.use(cors());
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'public')));


/** Middleware that checks if JWT token exists and verifies it if it does exist.
 * In all future routes, this helps to know if the request is authenticated or not. */
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


/** request handlers */
app.get('/', (req, res) => {
    if (!req.user) {
        return res.status(401).json({success: false, message: 'Invalid user to access it.'});
    }
    res.send('Welcome to the Node.js! - ' + req.user.name);
});

/** verify the token and return it if it's valid */
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

/** Handling routes request API handlers */
app.use('/API/signup', signupRoutes);
app.use('/API/auth/signin', authRoutes);
app.use(userPasswordRoutes);
app.use(userRolesRoutes);
app.use('/API/roles', roleRoutes);
app.use('/API/users', userRoutes);
app.use(resumeRoutes);

/** Error-handling middleware */
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(port, () => {
    console.log('Server started on: ' + port);
});
