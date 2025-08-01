module.exports = {
    create: `
        /*
            CREATE ANIMAIS
        */
            INSERT INTO 
                animais(ani_nome, ani_especie, ani_raca, ani_sexo, ani_nascimento, ani_pai, ani_mae) 
            VALUES
                ( ?, ?, ?, ?, ?, ?, ?);

    `,

    edit:`
        /*
            EDIT ANIMAIS
        */
            UPDATE 
                animais
            SET 
                ani_nome = ? , ani_especie = ? , ani_raca = ? , ani_sexo = ? , ani_nascimento = ? , ani_estado = ? , ani_pai  = ? , ani_mae  = ? 
            WHERE 
                ani_id = ?;   
    `,
    delete:`
        /*
            DELETE ANIMAIS
        */
            UPDATE 
                animais
            SET 
                ani_status = "desativado"
            WHERE 
                ani_id = ?
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
    selectUsuarioPermicao:`
        /*
            SELECT PERMIÇÕES DO USUÁRIOS
        */
            SELECT 
                uspr_permicao
            FROM 
                usuarios_propriedades 
            WHERE 
                usu_id = ? AND pro_id = ?;
    `,
}