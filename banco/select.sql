/*
-------------------
    USUARIOS 
-------------------
*/

/*
    CADASTRO DE USUARIOS
*/
INSERT INTO usuarios( `usu_nome`,`usu_email`, `usu_senha`, `usu_telefone`, `usu_foto`) VALUES ( ?, ?, ?, ?, ? );

/*
    SELECT DADOS USUARIOS
*/
SELECT `usu_nome`,`usu_email`,`usu_telefone`,`usu_foto` FROM usuarios WHERE usu_id = ?;

/*
    SELECT LOGIN 
    fazer o usu_last_login de procedures depois
*/
SELECT `usu_id`,`usu_senha` FROM usuarios WHERE `usu_email` = ?;

/*
    UPDATE DADOS USUARIOS
*/
UPDATE usuarios SET `usu_nome` = ?, `usu_email` = ?, `usu_senha` = ?, `usu_telefone`= ?, `usu_foto` = ? WHERE usu_id = ?;

/*
    DELETE DADOS USUARIOS
*/
UPDATE usuarios SET `usu_status` = "desativado" WHERE usu_id = ?;

/*
    VERIFICA O EMAIL UNICO
*/
SELECT 1 AS DUP FROM usuarios WHERE `usu_email` = ?

/*
    VERIFICA SE O USUARIO ESTA ATIVO
*/
SELECT 
    1 AS ACTIVE
FROM 
    usuarios
WHERE 
    usu_id = ?;


/*
-------------------
    PROPRIEDADES 
-------------------
*/


/*
    SELECT PROPRIEDADE USUARIO
*/
    SELECT 
        pro.pro_id, pro_nome, pro_descicao, pro_endereco
    FROM 
        usuarios usu 
    INNER JOIN 
        usuarios_propriedades uspr 
    ON 
        uspr.usu_id = usu.usu_id  
    INNER JOIN
        propriedades pro
    ON
        pro.pro_id = uspr.pro_id	
    WHERE 
        usu.usu_id=?;


/*
    CREATE PROPRIEDADE
*/
    INSERT INTO 
        propriedades( pro_nome, pro_descicao, pro_endereco, pro_oner ) 
    VALUES
        ( ?, ?, ?, ? );


/*
    EDIT PROPRIEDADES
*/  
    UPDATE 
        propriedades
    SET 
        pro_nome = ?, pro_descicao = ?, pro_endereco = ?
    WHERE 
        pro_id = ?;


/*
    DELETE PROPRIEDADES
*/
    UPDATE 
        propriedades
    SET
        pro_status = "desativado"
    WHERE    
        pro_id = ?



/*
-------------------
    ANIMAIS 
-------------------
*/


/*
    SELECT ANIMAIS PROPRIEDADES
*/
    SELECT 
        ani.ani_id, ani_nome, ani_especie, ani_raca, ani_sexo, ani_estado, ani_pai, ani_mae, ani_nascimento 
    FROM 
        animais ani
    INNER JOIN 
        animais_propriedades anpr
    ON 
        anpr.ani_id = ani.ani_id
    INNER JOIN 
        propriedades pro
    ON 
        pro.pro_id = anpr.pro_id
    WHERE 
        pro.pro_id = ?;


/*
    SELECT ANIMAIS USUARIOS
*/




/*
    CREATE ANIMAIS
*/
    INSERT INTO 
        animais(ani_nome, ani_especie, ani_raca, ani_sexo, ani_nascimento, ani_estado, ani_pai, ani_mae) 
    VALUES
        ( ?, ?, ?, ?, ?, ?, ?, ?);

/*
    EDIT ANIMAIS
*/
    UPDATE 
        animais
    SET 
        ani_nome = ? , ani_especie = ? , ani_raca = ? , ani_sexo = ? , ani_nascimento = ? , ani_estado = ? , ani_pai  = ? , ani_mae  = ? 
    WHERE 
        ani_id = ?;   

/*
    DELETE ANIMAIS
*/
    UPDATE 
        animais
    SET 
        ani_status = "desativado"
    WHERE 
        ani_id = ?
