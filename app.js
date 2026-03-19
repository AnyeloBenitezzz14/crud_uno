const express = require("express");
const mongoose = require ("mongoose");
require("dotenv").config();

const UserRoute = require("./routes/user");

//settings
const app = express ();
const port = process.env.PORT || 3000;

//middlewares
app.use(express.json());

app.use("/api", UserRoute);

//routes
app.get("/", (req, res) => {
    res.send ("Whats up")
});

//MONGO 
const MONGOURI = process.env.MONGODB_URI;

//Mongodb connection
mongoose
.connect(MONGOURI)
.then(() => console.log ("connected to mongoDB atlas"))
.catch ((error) => console.log (error));

//server listening 
app.listen(port, () => console.log("Server listening to", port));