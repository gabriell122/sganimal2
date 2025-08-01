const db = require("../db/index")
const { verificarToken } = require("../utils/jwt");
const animais = require("../sql/animais");
module.exports = {





    //CADASTRO PROPRIEDADE
    async Cadastro(request, response){
        try{
            const { pro_id ,nome, especie, raca, sexo, nascimento, pai, mae } = request.body;
            const token = request.headers["authorization"];

            //VERIFICA OS CAMPOS OBRIGATORIOS
            if(!( nome && especie && raca && sexo )){
                //CAMPO NULO
                return response.status(400).json({
                    confirma: false,
                    message: "campo nulo",
                })
            }

            //VERIFICA O TOKEN
            const user = verificarToken(token);
            //VERIFICA O TOKEN E SE O USUÁRIO DO TOKEN É O USUÁRIO QUE ESTA ALTERANDO O DADO
            if(!(user && user.usu_id)){
                //SEM AUTORIZAÇÃO
                return response.status(403).json({
                    confirma: false,
                    message: "Sem permição",
                })
            }

            //VERIFICAR SE O USUÁRIO TEMA PERMIÇÃO DE CADASTRAR ANIMAL NA PROPRIEDADE
            const res = await db.query( animais.selectUsuarioPermicao, [ user.usu_id, pro_id ])
            if(res[0][0].uspr_permicao  === "leitura"){
                //RETORNA ERROS NÃO TRATADOS
                return response.status(500).json({
                    confirma: false,
                    message:"Permição Insuficiente",
                })
            }


            //CADASTRA O ANIMAL
            await db.query( animais.create, [ nome, especie, raca, sexo, nascimento??null, pai??null, mae??null])

            //FAZER A ASOCIAÇÃO COM A PROPRIEDADE



            //RETORNA SUSCESO
            return response.status(200).json({
                confirma:true,
                message: "susceso"
            })

        } catch (error) {
            //RETORNA ERROS NÃO TRATADOS
            return response.status(500).json({
                confirma: false,
                message:"erro",
                error: error
            })
        }
    },

    //LISTA OS ANIMAIS DE UMA PROPRIEDADE
    async SelectPropriedadesAnimais(request, response) {
        try{
            const {pro_id} = request.params;
            const token = request.headers["authorization"];

            //VERIFICA OS CAMPOS OBRIGATORIOS
            if(!pro_id){
                //CAMPO NULO
                return response.status(400).json({
                    confirma: false,
                    message: "campo nulo",
                })
            }

            //VERIFICA O TOKEN
            const user = verificarToken(token);
            //VERIFICA O TOKEN E SE O USUÁRIO DO TOKEN É O USUÁRIO QUE ESTA ALTERANDO O DADO
            if(!(user && user.usu_id)){
                //SEM AUTORIZAÇÃO
                return response.status(403).json({
                    confirma: false,
                    message: "Sem permição",
                })
            }

            //VERIFICAR SE O USUÁRIO TEMA PERMIÇÃO DE CADASTRAR ANIMAL NA PROPRIEDADE
            const res = await db.query( animais.selectUsuarioPermicao, [ user.usu_id, pro_id ])
            if(res[0][0].uspr_permicao  === "leitura"){
                //RETORNA ERROS NÃO TRATADOS
                return response.status(500).json({
                    confirma: false,
                    message:"Permição Insuficiente",
                })
            }

            //SELECIONA TODOS OS ANIMAIS DE UMA PROPRIEDADE
            const resSelect = await db.query( animais.selectPropriedadesAnimais, [pro_id]);

            //RETORNA SUSCESO
            return response.status(200).json({
                confirma:true,
                message: "susceso",
                res:resSelect[0][0]
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
            const token = request.headers["authorization"];

            //VERIFICA OS CAMPOS OBRIGATORIOS
            if(!( nome && especie && raca && sexo && ani_id && estado)){
                //CAMPO NULO
                return response.status(400).json({
                    confirma: false,
                    message: "campo nulo",
                })
            }

            //VERIFICA O TOKEN
            const user = verificarToken(token);
            //VERIFICA O TOKEN E SE O USUÁRIO DO TOKEN É O USUÁRIO QUE ESTA ALTERANDO O DADO
            if(!(user && user.usu_id)){
                //SEM AUTORIZAÇÃO
                return response.status(403).json({
                    confirma: false,
                    message: "Sem permição",
                })
            }

            //VERIFICAR SE O USUÁRIO TEMA PERMIÇÃO DE CADASTRAR ANIMAL NA PROPRIEDADE
            const res = await db.query( animais.selectUsuarioPermicao, [ user.usu_id, pro_id ])
            if(res[0][0].uspr_permicao  === "leitura"){
                //RETORNA ERROS NÃO TRATADOS
                return response.status(500).json({
                    confirma: false,
                    message:"Permição Insuficiente",
                })
            }

            //EDITA OS DADOS DOS ANIMAIS
            await db.query( animais.edit, [ nome, especie, raca, sexo, nascimento??null, estado, pai??null, mae??null, ani_id]);

            //RETORNA SUSCESO
            return response.status(200).json({
                confirma:true,
                message: "susceso"
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
            const token = request.headers["authorization"];

            //VERIFICA OS CAMPOS OBRIGATORIOS
            if(!ani_id){
                //CAMPO NULO
                return response.status(400).json({
                    confirma: false,
                    message: "campo nulo",
                })
            }
            
            //VERIFICA O TOKEN
            const user = verificarToken(token);
            //VERIFICA O TOKEN E SE O USUÁRIO DO TOKEN É O USUÁRIO QUE ESTA ALTERANDO O DADO
            if(!(user && user.usu_id)){
                //SEM AUTORIZAÇÃO
                return response.status(403).json({
                    confirma: false,
                    message: "Sem permição",
                })
            }

            //VERIFICAR SE O USUÁRIO TEMA PERMIÇÃO DE CADASTRAR ANIMAL NA PROPRIEDADE
            const res = await db.query( animais.selectUsuarioPermicao, [ user.usu_id, pro_id ])
            if(res[0][0].uspr_permicao  === "leitura"){
                //RETORNA ERROS NÃO TRATADOS
                return response.status(500).json({
                    confirma: false,
                    message:"Permição Insuficiente",
                })
            }

            //DELETA O ANIMAL
            await db.query(animais.delete, [ani_id]);
            
            //RETORNA SUSCESO
            return response.status(200).json({
                confirma:true,
                message: "susceso"
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