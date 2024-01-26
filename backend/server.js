const express = require("express");
const connectDB = require("./config/database");
const dotenv = require("dotenv").config();
const port = 5000;

//connexion à la DB
connectDB();

const app = express();

// app.get("/post", (req,res)=>{
//     res.json({message: "Voici les données "});
// });&

//Middleware qui permet de traiter les données de la request
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Appel de la route 
app.use("/post", require("./routes/post.router"));

// Lancer le serveur
app.listen(port, () => console.log("Le serveur a démarré au port  " + port));

