const db = require("../db/index")
const { verificarToken } = require("../utils/jwt");
const propriedades = require("../sql/propriedades");
const usuariosPropriedades = require("../sql/usuariosPropriedades");

module.exports = {

    //CADASTRO PROPRIEDADE
    async Cadastro( request, response){
        try {
            const { dono, nome, descricao, endereco } = request.body
            const token = request.headers["authorization"];

            //VERIFICA OS CAMPOS OBRIGATORIOS
            if(!( dono && nome && descricao && endereco)){
                //CAMPO NULO
                return response.status(400).json({
                    confirma: false,
                    message: "campo nulo",
                })
            }

            //VERIFICA O TOKEN
            const user = verificarToken(token);

            //VERIFICA O TOKEN E SE O USUÁRIO DO TOKEN É O USUÁRIO QUE ESTA ALTERANDO O DADO
            if(!(user && user.usu_id == dono)){
                //SEM AUTORIZAÇÃO
                return response.status(403).json({
                    confirma: false,
                    message: "Sem permição",
                })
            }

            //CADASTRA A PROPRIEDADE
            const resPropriedades = await db.query( propriedades.create, [nome, descricao, endereco, dono]);

            //FAZ A PRIMEIRA ASOCIAÇÃO COM O DONO(ADMIN)
            await db.query(usuariosPropriedades.create, [ dono, resPropriedades[0].insertId, "admin"]);

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

    //LISTA PROPRIEDADE UNICA ID


    //SUAS PROPRIEDADES
    async SelectUsuariosPropriedades(request, response){
        try {
            const {usu_id} = request.params;
            const token = request.headers["authorization"];
            
            //VERIFICA O TOKEN
            const user = verificarToken(token);
            
            //VERIFICA O TOKEN E SE O USUÁRIO DO TOKEN É O USUÁRIO QUE ESTA ALTERANDO O DADO
            if(!(user && user.usu_id == usu_id)){
                //SEM AUTORIZAÇÃO
                return response.status(403).json({
                    confirma: false,
                    message: "Sem permição",
                })
            }

            //VERIFICA OS CAMPOS OBRIGATORIOS
            if(!(usu_id)){
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
            const { nome, descricao, endereco, usu_id } = request.body;
            const { pro_id } = request.params;
            const token = request.headers["authorization"];

            //VERIFICA O TOKEN
            const user = verificarToken(token);

            //VERIFICA O TOKEN E SE O USUÁRIO DO TOKEN É O USUÁRIO QUE ESTA ALTERANDO O DADO
            if(!(user && user.usu_id == usu_id)){
                //SEM AUTORIZAÇÃO
                return response.status(403).json({
                    confirma: false,
                    message: "Sem permição",
                })
            }

            //VERIFICA OS CAMPOS OBRIGATORIOS
            if(!( pro_id && nome && descricao && endereco)){
                //CAMPO NULO
                return response.status(400).json({
                    confirma: false,
                    message: "campo nulo",
                })
            }

            //VERIFICAR SE O USUÁRIO TEMA PERMIÇÃO DE ADMIN PARA EDITAR A PROPRIEDADE
            const res = await db.query( usuariosPropriedades.selectUsuarioPermicao, [ user.usu_id, pro_id ])
            if(!res[0][0].uspr_permicao  === "admin"){
                //RETORNA ERROS NÃO TRATADOS
                return response.status(500).json({
                    confirma: false,
                    message:"Permição Insuficiente",
                })
            }

            //EDITA A PROPRIEDADE DO USUARIO
            await db.query( propriedades.update, [ nome, descricao, endereco, pro_id])

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

    //DELETAR PROPRIEDADE
    async Deletar(request, response){
        try {
            const { usu_id } = request.body;
            const { pro_id } = request.params;
            
            const token = request.headers["authorization"];

            //VERIFICA O TOKEN
            const user = verificarToken(token);
            
            //VERIFICA O TOKEN E SE O USUÁRIO DO TOKEN É O USUÁRIO QUE ESTA ALTERANDO O DADO
            if(!(user && user.usu_id == usu_id)){
                //SEM AUTORIZAÇÃO
                return response.status(403).json({
                    confirma: false,
                    message: "Sem permição",
                })
            }


            //VERIFICA OS CAMPOS OBRIGATORIOS
            if(!pro_id){
                //CAMPO NULO
                return response.status(400).json({
                    confirma: false,
                    message: "campo nulo",
                })
            }

            //VERIFICAR SE O USUÁRIO TEMA PERMIÇÃO DE ADMIN PARA EDITAR A PROPRIEDADE
            const res = await db.query( usuariosPropriedades.selectUsuarioPermicao, [ user.usu_id, pro_id ])
            if(!res[0][0].uspr_permicao  === "admin"){
                //RETORNA ERROS NÃO TRATADOS
                return response.status(500).json({
                    confirma: false,
                    message:"Permição Insuficiente",
                })
            }

            //DELETA A PROPRIEDADE DO USUARIO
            await db.query( propriedades.delete, [ pro_id ])

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
}

