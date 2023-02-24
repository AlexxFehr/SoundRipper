import express from 'express';


//Init express
const app =  express();


//On post request
app.post('download', async (req, res) => {

    console.log("Tests");

});

//Run express on port 8080
app.listen(8080, () => console.log("Server running on port 8080"));
