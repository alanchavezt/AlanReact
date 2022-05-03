const express = require('express');
const axios = require("axios");

const routes = express.Router();
const API = "http://localhost:8080";

routes.get('/API/roles', (req, res) => {
    console.log('Role List')
    const authorization = "Bearer " + req.headers.authorization;

    axios.get(`${API}/API/roles`,{
        headers: {'authorization': authorization}
    }).then(response => {
        res.status(200);
        res.set("Connection", "close");
        res.json(response.data);
    }).catch(error => {
        res.json("Error occurred: " + error);
    });
});

routes.get('/API/roles/:id', (req, res) => {
    console.log('GET - Role ID:', req.params.id)
    const roleId =  req.params.id;
    const authorization = "Bearer " + req.headers.authorization;

    axios.get(`${API}/API/roles/${roleId}`, {
        headers: {'authorization': authorization}
    }).then(response => {
        res.status(200);
        res.set("Connection", "close");
        res.json(response.data);
    }).catch(error => {
        res.json("Error occurred!")
    });
});

routes.post('/API/roles', async (req, res, next)=>{
    console.log('POST - Role: ', req.body);
    const authorization = "Bearer " + req.headers.authorization;

    try {
        const role = req.body;
        // const hashedPassword = await bcrypt.hash(req.body.password, 10);
        // user.password = hashedPassword;

        const response = await axios.post(`${API}/API/roles`, role, {
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

routes.put('/API/roles/:id', async (req, res)=>{
    console.log('PUT - Role ID: ', req.params.id);
    const authorization = "Bearer " + req.headers.authorization;

    try {
        const roleId = req.params.id;
        const role = req.body;
        // const hashedPassword = await bcrypt.hash(req.body.password, 10);
        // user.password = hashedPassword;

        const response = await axios.put(`${API}/API/roles/${roleId}`, role, {
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

routes.delete('/API/roles/:id', (req, res)=>{
    console.log('DELETE - Role ID: ', req.params.id);
    const roleId = req.params.id;
    const authorization = "Bearer " + req.headers.authorization;

    axios.delete(`${API}/API/roles/${roleId}`, {
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
