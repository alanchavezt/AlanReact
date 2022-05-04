const express = require('express');
const axios = require("axios");

const routes = express.Router();
const API = "http://localhost:8080";

routes.get('/', (req, res) => {
    console.log('User List')
    const authorization = "Bearer " + req.headers.authorization;

    axios.get(`${API}/API/users`,{
        headers: {'authorization': authorization}
    }).then(response => {
        res.status(200);
        res.set("Connection", "close");
        res.json(response.data);
    }).catch(error => {
        res.json("Error occurred: " + error);
    });
});

routes.get('/:id', (req, res) => {
    console.log('GET - User ID:', req.params.id)
    const userId =  req.params.id;
    const authorization = "Bearer " + req.headers.authorization;

    axios.get(`${API}/API/users/${userId}`, {
        headers: {'authorization': authorization}
    }).then(response => {
        res.status(200);
        res.set("Connection", "close");
        res.json(response.data);
    }).catch(error => {
        res.json("Error occurred!" + error);
    });
});

routes.put('/:id', async (req, res)=>{
    console.log('PUT - User ID: ', req.params.id);
    const authorization = "Bearer " + req.headers.authorization;

    try {
        const userId = req.params.id;
        const user = req.body;
        // const hashedPassword = await bcrypt.hash(req.body.password, 10);
        // user.password = hashedPassword;

        const response = await axios.put(`${API}/API/users/${userId}`, user, {
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

routes.post('/', async (req, res, next)=>{
    console.log('POST - User: ', req.body);
    const authorization = "Bearer " + req.headers.authorization;

    try {
        const user = req.body;
        // const hashedPassword = await bcrypt.hash(req.body.password, 10);
        // user.password = hashedPassword;

        const response = await axios.post(`${API}/API/users`, user, {
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

routes.delete('/:id', (req, res)=>{
    console.log('DELETE - User ID: ', req.params.id);
    const userId = req.params.id;
    const authorization = "Bearer " + req.headers.authorization;

    axios.delete(`${API}/API/users/${userId}`, {
        headers: {'authorization': authorization}
    }).then(response => {
        res.status(200);
        res.set("Connection", "close");
        res.json(response.data);
    }).catch(error => {
        res.json("Error occurred!")
    });
});

module.exports = routes;
