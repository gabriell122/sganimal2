module.exports = {
    create:`
        /*
            ASOCIA A PROPRIEDADE AO USUARIO
        */
            INSERT INTO 
                usuarios_propriedades( usu_id, pro_id, uspr_permicao) 
            VALUES
                ( ?, ? , ? );
    `,

    selectUsuarioPermicao:`
        /*
            SELECT PERMIÇÕES DO USUÁRIOS
        */
            SELECT 
                uspr_permicao
            FROM 
                usuarios_propriedades 
            WHERE 
                usu_id = ? AND pro_id = ? AND uspr_status = "ativo";
    `,

}