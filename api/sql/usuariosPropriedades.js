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
            SELECT PERMICOES DO USUARIOS
        */
            SELECT 
                uspr_permicao
            FROM 
                usuarios_propriedades 
            WHERE 
                usu_id = ? AND pro_id = ? AND uspr_status = "ativo";
    `,
    selectUsuariosPropriedades:`
        /*
            SELECT OS USUARIOS E SUAS PERMICOES DA PROPRIEDADE
        */
            SELECT 
                usu.usu_id, usu.usu_nome, usu.usu_email, uspr.uspr_permicao 
            FROM 
                usuarios_propriedades uspr 
            INNER JOIN 
                usuarios usu
            ON
                usu.usu_id = uspr.usu_id
            WHERE 
                pro_id = ?;
                
    `,
    selectUsuario:`
        /*
            SELECT ID USUARIO
        */
            SELECT CASE
                WHEN EXISTS (SELECT 1 FROM usuarios WHERE usu_email = ? ) THEN
                    (SELECT usu_id FROM usuarios WHERE usu_email = ? LIMIT 1)
                ELSE 0
            END AS usu_id;
    `,

    editar:`
        /*
            EDITAR USUARIO_PRORIEDADE
        */
            UPDATE 
                usuarios_propriedades
            SET
                uspr_permicao = ?
            WHERE 
                usu_id = ? AND pro_id = ?;
            
    `,

}