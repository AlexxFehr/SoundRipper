import express from "express";
import bodyParser from "body-parser";

import cors from "cors";

import ffmpeg from "fluent-ffmpeg"; 
import ytdl from "ytdl-core";


//Init express
const app =  express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//On post request
app.post('/download', async (req, res) => {
    console.log(req.body);
    res.send("200");
});

//Run express on port 8080
app.listen(8080, () => console.log("Server running on port 8080"));
