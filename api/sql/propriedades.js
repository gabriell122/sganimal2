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
            usu.usu_id=? AND pro_status = "ativo";
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
            pro_id = ?;
    `,
    userProp:`
        /*
            ASOCIA A PROPRIEDADE AO USUARIO
        */
        INSERT INTO 
            usuarios_propriedades( usu_id, pro_id, uspr_permicao) 
        VALUES
            ( ?, ? , "dono" );
    `,
}