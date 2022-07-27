const express = require('express');
const axios = require("axios");

const routes = express.Router();

routes.get('/', (req, res) => {
    console.log('Role List')
    const authorization = "Bearer " + req.headers.authorization;

    axios.get(`${process.env.API_URL}/API/roles`,{
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
    console.log('GET - Role ID:', req.params.id)
    const roleId =  req.params.id;
    const authorization = "Bearer " + req.headers.authorization;

    axios.get(`${process.env.API_URL}/API/roles/${roleId}`, {
        headers: {'authorization': authorization}
    }).then(response => {
        res.status(200);
        res.set("Connection", "close");
        res.json(response.data);
    }).catch(error => {
        res.json("Error occurred!")
    });
});

routes.post('/', async (req, res, next)=>{
    console.log('POST - Role: ', req.body);
    const authorization = "Bearer " + req.headers.authorization;

    try {
        const role = req.body;
        // const hashedPassword = await bcrypt.hash(req.body.password, 10);
        // user.password = hashedPassword;

        const response = await axios.post(`${process.env.API_URL}/API/roles`, role, {
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

routes.put('/:id', async (req, res)=>{
    console.log('PUT - Role ID: ', req.params.id);
    const authorization = "Bearer " + req.headers.authorization;

    try {
        const roleId = req.params.id;
        const role = req.body;
        // const hashedPassword = await bcrypt.hash(req.body.password, 10);
        // user.password = hashedPassword;

        const response = await axios.put(`${process.env.API_URL}/API/roles/${roleId}`, role, {
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
    console.log('DELETE - Role ID: ', req.params.id);
    const roleId = req.params.id;
    const authorization = "Bearer " + req.headers.authorization;

    axios.delete(`${process.env.API_URL}/API/roles/${roleId}`, {
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
