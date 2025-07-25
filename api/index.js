//IMPORTS
const cors = require("cors");
const express = require("express");

//ROUTER
const router = require("./routers/index.js");

//APP
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

const PORTA = 3333;
app.listen(PORTA, ()=>{
    console.log("SERVIDOR INICIADOR NA PORTA " + PORTA);
})
