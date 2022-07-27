const express = require('express');
const axios = require("axios");

const routes = express.Router();

routes.post('/API/users/:id/password', async (req, res)=>{
    console.log('New Password - User ID: ', req.params.id);
    const authorization = "Bearer " + req.headers.authorization;

    try {
        const userId = req.params.id;
        const createPassword = req.body;
        // const hashedPassword = await bcrypt.hash(req.body.password, 10);
        // user.password = hashedPassword;

        const response = await axios.post(`${process.env.API_URL}/API/users/${userId}/password`, createPassword, {
            headers: {'authorization': authorization}
        });

        // res.status(200);
        res.status(201);
        res.set("Connection", "close");
        res.json(response.data);
    } catch (error)  {
        res.status(500).send();
        res.json("Error occurred!");
    }
});

routes.put('/API/users/:id/password', async (req, res)=>{
    console.log('Resetting Password - User ID: ', req.params.id);
    const authorization = "Bearer " + req.headers.authorization;

    try {
        const userId = req.params.id;
        const changePassword = req.body;
        // const hashedPassword = await bcrypt.hash(req.body.password, 10);
        // user.password = hashedPassword;

        const response = await axios.put(`${process.env.API_URL}/API/passwords/${userId}`, changePassword, {
            headers: {'authorization': authorization}
        });

        // res.status(200);
        res.status(201);
        res.set("Connection", "close");
        res.json(response.data);
    } catch (error)  {
        // res.status(500).send();
        res.json("Error occurred resetting password!" + error);
    }
});

module.exports = routes;
