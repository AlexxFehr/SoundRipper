import express from "express";
import bodyParser from "body-parser";

import cors from "cors";

import ffmpeg from "fluent-ffmpeg"; 
import ytdl from "ytdl-core";

import {getYTVideoID} from "./getYTVideoID.js"

import fs from "fs";
import { Console } from "console";


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
    
    //Log request
    console.log("REQ : /download : POST : LINK = " + videoLink + " : QUALITY = " + quality); 
    
    //Get videoid from link and get title from id
    const videoID = getYTVideoID(videoLink);

    /*ytdl.getInfo(videoLink).then(info => {
        const videoTitle = info.videoDetails.title;
    })*/

    const filename = videoID + ".mp4";

    ytdl(videoLink)
    .pipe(fs.createWriteStream(filename))
    .on("finish", () => {
        res.send("");
    });

    
});

//On get request
app.get("/download", async (req, res) => {
    
    //TODO Download Correct File 
    const videoID = req.query.id + ".mp4";

    res.download(videoID, (e) => {

        //TODO Check for errors

        fs.unlink(videoID, (e) => {

            //TODO Check for errors

        });
    });
});


//Run express on port 8080
app.listen(8080, () => console.log("Server running on port 8080"));
