const express = require ("express");
const mongoose = require("mongoose");
const Router = require("./router");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://Sachin:Sachin1997@cluster0.7gzcge4.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log('connected to MongoDB'))
.catch(error => console.error('could not connect to MongoDB', error));

app.use(Router);
app.listen(5000,()=>{
console.log("server is running...");
});

