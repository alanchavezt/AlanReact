const express = require('express');
const axios = require("axios");

const router = express.Router();
let config = {
    headers: {
        'authorization': ""
    }
};

router.use( (req, res, next) => {
    const authorization = "Bearer " + req.headers.authorization;
    config.headers.authorization = authorization;
    next();
});

router.route('/')
    .get((req, res) => {
        console.log('GET Users')
        const url = `${process.env.API_URL}/API/users`;

        axios.get(url, config).then(response => {
            res.status(200).json(response.data);
        }).catch(error => {
            res.json("Error occurred: " + error);
        });
    })
    .post(async (req, res, next)=>{
        console.log('Create User: ', req.body);
        const url = `${process.env.API_URL}/API/users`;
        // const user = req.body;

        try {
            const response = await axios.post(url, req.body, config);

            res.status(200).json(response.data);
        } catch (error)  {
            res.json("Error occurred: " + error);
        }
    });

router.route('/:id')
    .get((req, res) => {
        console.log('GET User - User ID:', req.params.id)
        const userId =  req.params.id;
        const url = `${process.env.API_URL}/API/users/${userId}`;

        axios.get(url, config).then(response => {
            res.status(200).json(response.data);
        }).catch(error => {
            res.json("Error occurred!" + error);
        });
    })
    .put(async (req, res)=>{
        console.log('PUT - User ID: ', req.params.id);
        const userId = req.params.id;
        const url = `${process.env.API_URL}/API/users/${userId}`;
        // const user = req.body;

        try {
            const response = await axios.put(url, req.body, config);

            res.status(200).json(response.data);
        } catch (error)  {
            res.json("Error occurred!" + error);
        }
    })
    .delete((req, res)=>{
        console.log('DELETE - User ID: ', req.params.id);
        const userId = req.params.id;
        const url = `${process.env.API_URL}/API/users/${userId}`;

        axios.delete(url, config).then(response => {
            res.status(200).json(response.data);
        }).catch(error => {
            res.json("Error occurred!" + error);
        });
    });

module.exports = router;
