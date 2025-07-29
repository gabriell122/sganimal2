//IMPORTS
const cors = require("cors");
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

//ROUTER
const router = require("./routers/index.js");

//APP
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORTA = 3333;
app.listen(PORTA, ()=>{
    console.log("SERVIDOR INICIADOR NA PORTA " + PORTA);
})
