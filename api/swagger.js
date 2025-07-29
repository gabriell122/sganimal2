// swagger.js
const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Minha API Node",
    version: "1.0.0",
    description: "Documentação com Swagger",
  },
  servers: [
    {
      url: "http://localhost:3333", // URL base da API
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./routers/index.js"], // arquivos que contém os endpoints documentados
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
