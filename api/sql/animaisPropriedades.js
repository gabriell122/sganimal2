module.exports= {
    create:`
        /*
            CREATE ANIMAIS PROPRIEDADES
        */
            INSERT INTO 
                animais_propriedades( ani_id, pro_id )
            VALUES 
                ( ?, ? );
    `,
}