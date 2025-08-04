const express = require("express");
const router = express.Router();

const usuarios = require("../controllers/usuarios");
const propriedades = require("../controllers/propriedades");
const animais = require("../controllers/animais");
const usuariosPropriedades = require("../controllers/usuariosPropriedades")



/*
    USUARIOS
*/

//LOGIN
router.post("/login", usuarios.Login);

//CADASTRAR USUARIOS
router.post("/usuarios", usuarios.Cadastro);

//EDITAR USUARIOS
router.put("/usuarios/:usu_id", usuarios.Editar);

//DELETAR USUARIOS
router.delete("/usuarios/:usu_id", usuarios.Deletar);


/*
    PROPRIEDADES
*/

//CRIAR ROTA DE ASOCIAÇÃO USUARIO PROPRIEDADE

//SELECIONA AS PROPRIEDADES DE UM USUARIO
router.get("/usuarios/:usu_id/propriedades", propriedades.SelectUsuariosPropriedades);

//CADASTRAR PRORPIEDADES
router.post("/propriedades", propriedades.Cadastro);

//EDITAR PROPRIEDADES
router.put("/propriedades/:pro_id", propriedades.Editar);


//DELETAR PROPRIEDADES
router.delete("/propriedades/:pro_id", propriedades.Deletar);


/*
    USUARIOS_PROPRIEDADES
*/

//CADASTRA O USUARIO A PROPRIEDADE
router.post("/proriedades/:pro_id/usuarios_propriedades", usuariosPropriedades.Cadastro);

//SELECIONA OS USUARIOS DE UMA PROPRIEDADE
router.get("/propriedades/:pro_id/usuarios_propriedades", usuariosPropriedades.PermicoesUsuariosPropriedades);

//EDITA A PERCICOES DO USUARIO
router.put("/propriedade/:pro_id/usuarios_propriedades", usuariosPropriedades.Editar);


/*
    ANIMAIS
*/

//CADASTRAR ANIMAIS
router.post("/animais", animais.Cadastro);

//SELECIONA OS ANIMAIS DE UMA PROPRIEDADE
router.get("/propriedades/:pro_id/animais", animais.SelectPropriedadesAnimais);

//EDITAR ANIMAIS
router.put("/animais/:ani_id", animais.Editar);

//DELETAR ANIMAIS
router.delete("/animais/:ani_id", animais.Deletar);

module.exports = router;