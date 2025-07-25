const express = require("express");
const router = express.Router();

const usuarios = require("../controllers/usuarios");
const propriedades = require("../controllers/propriedades");
const animais = require("../controllers/animais");


router.post("/usuarios", usuarios.Cadastro);
router.put("/usuarios/:id", usuarios.Editar);
router.delete("/usuarios/:id", usuarios.Deletar);

router.get("/propriedades/:usu_id", propriedades.ListarTodas)
router.post("/propriedades", propriedades.Cadastro);
router.put("/propriedades/:id", propriedades.Editar);
router.delete("/propriedades/:id", propriedades.Deletar);

//API REST

/*
    USUARIOS
*/

//LOGIN
router.post("/login", usuarios.Login);


/*
    PROPRIEDADES
*/

//SELECIONA OS ANIMAIS DE UMA PROPRIEDADE
router.get("/propriedades/:pro_id/animais", propriedades.SelectPropriedadesAnimais);


/*
    ANIMAIS
*/

//CADASTRAR ANIMAIS
router.post("/animais", animais.Cadastro);

//EDITAR ANIMAIS
router.put("/animais/:ani_id", animais.Editar);

//DELETAR ANIMAIS
router.delete("/animais/:ani_id", animais.Deletar);

module.exports = router;