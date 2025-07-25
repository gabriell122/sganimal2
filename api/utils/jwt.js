require("dotenv").config()
const jwt = require("jsonwebtoken")
const key = process.env.KEY;

//VALIDA O TOKEN JWT
const verificarToken = (token) => {
  try {
    const decoded = jwt.verify(token, key);
    return decoded;
  } catch (err) {
    return false;
  }
};

//GERA O TOKEN JWT
const gerarToken = (user)=>{
    return jwt.sign( user, key, {expiresIn:"1h"} )
}

module.exports = { verificarToken, gerarToken};