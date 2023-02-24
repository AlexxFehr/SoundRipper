import express from "express";
import bodyParser from "body-parser";

import cors from "cors";

import ffmpeg from "fluent-ffmpeg"; 
import ytdl from "ytdl-core";

import fs from "fs";


//Init express
const app =  express();

//Init ffmpeg
const proc = new ffmpeg();

//Use cors
app.use(cors());

//Use bodyparser to parse the incoming json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//On post request
app.post('/download', async (req, res) => {
    const videoLink = req.body.link;
    const quality = req.body.quality;

    ytdl(videoLink, { filter: (format) => format.container === 'mp4' }).pipe(fs.createWriteStream('video.mp4')).on("finish", () => fs.close());
});

//Run express on port 8080
app.listen(8080, () => console.log("Server running on port 8080"));
