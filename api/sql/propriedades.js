module.exports = {
    create:`
        /*
            CREATE PROPRIEDADE
        */
        INSERT INTO 
            propriedades( pro_nome, pro_descicao, pro_endereco, pro_oner ) 
        VALUES
            ( ?, ?, ?, ? );
    `,
    selectall:`
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
    `,
    selectPropriedadesAnimais:`
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
    `,
    update:`
        /*
            EDIT PROPRIEDADES
        */  
        UPDATE 
            propriedades
        SET 
            pro_nome = ?, pro_descicao = ?, pro_endereco = ?
        WHERE 
            pro_id = ?;
    `,
    delete:`
        /*
            DELETE PROPRIEDADES
        */
        UPDATE 
            propriedades
        SET
            pro_status = "desativado"
        WHERE    
            pro_id = ?
    `,
}