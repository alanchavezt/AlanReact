const express = require('express');
const path = require("path");
const fs = require("fs");

const routes = express.Router();

routes.get('/getResume', (req, res) => {
    console.log('GET - Get Resume');
    const filePath = path.join(__dirname, '../components/Resume/local-json/myResumeFile.json')

    fs.readFile(filePath, 'utf8' , (err, data) => {
        if (err) {
            console.error(err);
            return res.status(403).json({
                error: true,
                message: "File not found!"
            });
        }
        console.log(data);
        const resume = JSON.parse(data);
        return res.json(resume);
    })
});

routes.post('/writeFile', async (req, res) => {
    const authorization = "Bearer " + req.headers.authorization;
    const resume = req.body;
    const updatedResume = JSON.stringify(resume);
    const filePath = path.join(__dirname, '../components/Resume/local-json/myResumeFile.json')

    // TODO figure out how to use the file system library with React
    fs.writeFile(filePath, updatedResume, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
});

module.exports = routes;
