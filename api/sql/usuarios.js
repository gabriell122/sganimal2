module.exports = {
    create:`
        /*
            CREATE USUARIOS
        */
        INSERT INTO 
            usuarios( usu_nome,usu_email, usu_senha, usu_telefone, usu_foto) 
        VALUES 
            ( ?, ?, ?, ?, ? );
    `,
    select:`
        SELECT 
            usu_id,usu_nome,usu_email,usu_telefone,usu_foto 
        FROM 
            usuarios 
        WHERE 
            usu_id = ?;
    `,
    login:`
        SELECT 
            usu_id,usu_senha 
        FROM 
            usuarios 
        WHERE 
            usu_email = ? AND usu_status = "ativo";
    `,
    edit:`
        UPDATE 
            usuarios 
        SET 
            usu_nome = ?, usu_email = ?, usu_telefone= ?, usu_foto = ? 
        WHERE 
            usu_id = ?;
    `,
    delete:`
        UPDATE 
            usuarios 
        SET 
            usu_status = "desativado" 
        WHERE 
            usu_id = ?;
    `,
    emailDup:`
        SELECT 
            1 AS DUP 
        FROM 
            usuarios 
        WHERE 
            usu_email = ?;
    `,
    lastLogin:`
        /*
            REGISTRA O ULTIMO LOGIN
        */
        UPDATE 
            usuarios
        SET 
            usu_last_login = CURRENT_TIMESTAMP()
        WHERE 
            usu_id = ?;
    `,
    disable:`
        /*
            VERIFICA SE O USUARIO ESTA ATIVO
        */
        SELECT 
            1 AS ACTIVE
        FROM 
            usuarios
        WHERE 
            usu_id = ?;
    `,
    
}