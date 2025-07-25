const db = require("../db/index")
const { verificarToken } = require("../utils/jwt");
const animais = require("../sql/animais");
module.exports = {


    //CADASTRO PROPRIEDADE
    async Cadastro(request, response){
        try{
            const { nome, especie, raca, sexo, nascimento, pai, mae } = request.body;

            //VERIFICA OS CAMPOS OBRIGATORIOS
            if(!( nome && especie && raca && sexo )){
                //CAMPO NULO
                return response.status(400).json({
                    confirma: false,
                    message: "campo nulo",
                })
            }

            //CADASTRA O ANIMAL
            const res = await db.query( animais.create, [ nome, especie, raca, sexo, nascimento??null, pai??null, mae??null])

            //RETORNA SUSCESO
            return response.status(200).json({
                confirma:true,
                message: "susceso",
                res:res
            })

        } catch (error) {
            //RETORNA ERROS NÃO TRATADOS
            return response.status(500).json({
                message:"erro",
                error: error
            })
        }
    },

    //LISTA OS ANIMAIS DE UMA PROPRIEDADE
    async SelectPropriedadesAnimais(request, response) {
        try{
            const {pro_id} = request.params;

            //VERIFICA OS CAMPOS OBRIGATORIOS
            if(!pro_id){
                //CAMPO NULO
                return response.status(400).json({
                    confirma: false,
                    message: "campo nulo",
                })
            }

            //SELECIONA TODOS OS ANIMAIS DE UMA PROPRIEDADE
            const res = await db.query( propriedades.selectPropriedadesAnimais, [pro_id]);

            //RETORNA SUSCESO
            return response.status(200).json({
                confirma:true,
                message: "susceso",
                res:res
            })

        } catch (error) {
            //RETORNA ERROS NÃO TRATADOS
            return response.status(500).json({
                message:"erro",
                error: error
            })
        }
    },


    //EDITAR ANIMAL
    async Editar(request, response){
        try{
            const { nome, especie, raca, sexo, nascimento,  estado, pai, mae } = request.body;
            const {ani_id} = request.params;

            //VERIFICA OS CAMPOS OBRIGATORIOS
            if(!( nome && especie && raca && sexo && ani_id && estado)){
                //CAMPO NULO
                return response.status(400).json({
                    confirma: false,
                    message: "campo nulo",
                })
            }

            //EDITA OS DADOS DOS ANIMAIS
            const res = await db.query( animais.edit, [ nome, especie, raca, sexo, nascimento??null, estado, pai??null, mae??null, ani_id]);

            //RETORNA SUSCESO
            return response.status(200).json({
                confirma:true,
                message: "susceso",
                res:res
            })

        } catch (error) {
            //RETORNA ERROS NÃO TRATADOS
            return response.status(500).json({
                message:"erro",
                error: error
            })
        }
    },

    //DELETAR ANIMAIS
    async Deletar(request, response){
        try{
            const {ani_id} = request.params;
            //VERIFICA OS CAMPOS OBRIGATORIOS
            if(!ani_id){
                //CAMPO NULO
                return response.status(400).json({
                    confirma: false,
                    message: "campo nulo",
                })
            }
            
            //DELETA O ANIMAL
            const res = await db.query(animais.delete, [ani_id]);
            
            //RETORNA SUSCESO
            return response.status(200).json({
                confirma:true,
                message: "susceso",
                res:res
            })

        } catch (error) {
            //RETORNA ERROS NÃO TRATADOS
            return response.status(500).json({
                message:"erro",
                error: error
            })
        }
    }
}