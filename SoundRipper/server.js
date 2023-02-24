import express from "express";
import ffmpeg from "fluent-ffmpeg"; 
import ytdl from "ytdl";


//Init express
const app =  express();


//On post request
app.post('/download', async (req, res) => {



});

//Run express on port 8080
app.listen(8080, () => console.log("Server running on port 8080"));
