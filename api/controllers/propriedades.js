const db = require("../db/index")
const { verificarToken } = require("../utils/jwt");
const propriedades = require("../sql/propriedades");


module.exports = {

    //CADASTRO PROPRIEDADE
    async Cadastro( request, response){
        try {
            const { dono, nome, descricao, endereco } = request.body

            //VERIFICA OS CAMPOS OBRIGATORIOS
            if(!( dono && nome && descricao && endereco)){
                //CAMPO NULO
                return response.status(400).json({
                    confirma: false,
                    message: "campo nulo",
                })
            }
            
            //CADASTRA A PROPRIEDADE
            const res = await db.query( propriedades.create, [nome, descricao, endereco, dono])
            
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

    //LISTA PROPRIEDADE UNICA ID


    //SUAS PROPRIEDADES
    async ListarTodas(request, response){
        try {
            const {usu_id} = request.params;
            console.log(usu_id);
            
            //VERIFICA OS CAMPOS OBRIGATORIOS
            if(!usu_id){
                //CAMPO NULO
                return response.status(400).json({
                    confirma: false,
                    message: "campo nulo",
                })
            }

            //SELECIONA TODAS AS PROPRIEDADES DO USUARIO
            const res = await db.query( propriedades.selectall, [usu_id])

            //RETORNA SUSCESO
            return response.status(200).json({
                confirma:true,
                message: "susceso",
                res:res[0]
            })

        } catch (error) {
            //RETORNA ERROS NÃO TRATADOS
            return response.status(500).json({
                message:"erro",
                error: error
            })
        }
    },

    //EDITAR PROPRIEDADE

    async Editar(request, response){
        try {
            const { nome, descricao, endereco } = request.body;
            const { id } = request.params;
            //VERIFICA OS CAMPOS OBRIGATORIOS
            if(!( id && nome && descricao && endereco)){
                //CAMPO NULO
                return response.status(400).json({
                    confirma: false,
                    message: "campo nulo",
                })
            }

            //EDITA A PROPRIEDADE DO USUARIO
            const res = await db.query( propriedades.update, [ nome, descricao, endereco, id])

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

    //DELETAR PROPRIEDADE
    async Deletar(request, response){
        try {
            const { id } = request.params;
            //VERIFICA OS CAMPOS OBRIGATORIOS
            if(!id){
                //CAMPO NULO
                return response.status(400).json({
                    confirma: false,
                    message: "campo nulo",
                })
            }

            //DELETA A PROPRIEDADE DO USUARIO
            const res = await db.query( propriedades.delete, [ id ])

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
}

