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
}