module.exports = {
    usuario:'',
    cadastro: 'INSERT INTO usuarios( `usu_nome`,`usu_email`, `usu_senha`, `usu_telefone`, `usu_foto`) VALUES ( ?, ?, ?, ?, ? );',
    dados:'SELECT `usu_id`,`usu_nome`,`usu_email`,`usu_telefone`,`usu_foto` FROM usuarios WHERE usu_id = ?;',
    login:'SELECT `usu_id`,`usu_senha` FROM usuarios WHERE `usu_email` = ?;',
    editar:'UPDATE usuarios SET `usu_nome` = ?, `usu_email` = ?, `usu_telefone`= ?, `usu_foto` = ? WHERE usu_id = ?;',
    delete:'UPDATE usuarios SET `usu_status` = "desativado" WHERE usu_id = ?;',
    email:'SELECT 1 AS DUP FROM usuarios WHERE `usu_email` = ?;',
}