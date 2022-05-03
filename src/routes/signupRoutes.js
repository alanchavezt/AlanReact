const express = require('express');
const axios = require("axios");

const routes = express.Router();
const API = "http://localhost:8080";

routes.post('/', async (req, res, next)=>{
    console.log('user: ', req.body);

    try {
        const user = req.body;
        // const hashedPassword = await bcrypt.hash(req.body.password, 10);
        // user.password = hashedPassword;

        const response = await axios.post(`${API}/API/signup`, user);

        // res.status(200);
        res.status(201).send();
        res.set("Connection", "close");
        res.json(response.data);
    } catch (error)  {
        res.status(500).send();
        res.json("Error occurred!");
    }
});

module.exports = routes;
