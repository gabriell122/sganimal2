const { verificarToken } = require("../utils/jwt");
const usuariosPropriedades = require("../sql/usuariosPropriedades");
const usuarios = require("../sql/usuarios");
module.exports ={

    //ASSOCIA O USUARIOS AS PROPRIEDADES
    async Cadastro(request, response){
        try {
            const { email, permicao} = request.body;
            const { pro_id } = request.params;
            const token = request.headers["authorization"];

            //VERIFICA OS CAMPOS OBRIGATORIOS
            if(!(pro_id && email && permicao)){
                //CAMPO NULO
                return response.status(400).json({
                    confirma: false,
                    message: "campo nulo",
                })
            }

            //VERIFICA O TOKEN
            const user = verificarToken(token);
            
            //VERIFICA O TOKEN E SE O USUÁRIO DO TOKEN É O USUÁRIO QUE ESTA ALTERANDO O DADO
            if(!(user && user.usu_id == usu_id)){
                //SEM AUTORIZAÇÃO
                return response.status(401).json({
                    confirma: false,
                    message: "Sem permição",
                })
            }

            //VERIFICAR SE O USUÁRIO TEM A PERMIÇÃO DE ADMIN NA PROPRIEDADE
            const res = await db.query( usuariosPropriedades.selectUsuarioPermicao, [ user.usu_id, pro_id ])
            if(!res[0][0].uspr_permicao  === "admin"){
                return response.status(403).json({
                    confirma: false,
                    message:"Permição Insuficiente",
                })
            }

            //BUSCA O USUARIO
            const resUsuarios = await db.query(usuariosPropriedades.selectUsuario, [ email, email ])
            if (!resUsuarios[0][0].usu_id) {
                return response.status(404).json({
                    confirma: false,
                    message:"Email Não Encontrado",
                })
            }
            
            //ASSOCIA O USUARIO A PROPRIEDADE
            await db.query(usuariosPropriedades.create, [ pro_id, resUsuarios[0][0].usu_id])

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

    //RETORNA OS USUARIOS DA PROPRIEDADE E SUAS PERMIÇÕES
    async PermicoesUsuariosPropriedades(request, response){
        try {
            const { pro_id } = request.params;
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
            if(!(user && user.usu_id == usu_id)){
                //SEM AUTORIZAÇÃO
                return response.status(401).json({
                    confirma: false,
                    message: "Sem permição",
                })
            }

            //VERIFICAR SE O USUÁRIO TEM A PERMIÇÃO DE ADMIN NA PROPRIEDADE
            const res = await db.query( usuariosPropriedades.selectUsuarioPermicao, [ user.usu_id, pro_id ])
            if(!res[0][0].uspr_permicao  === "admin"){
                //RETORNA ERROS NÃO TRATADOS
                return response.status(403).json({
                    confirma: false,
                    message:"Permição Insuficiente",
                })
            }

            //SELECIONA TODOS USUARIOS E SUAS PERMICOES DE UMA PROPRIEDADE
            const resSelect  = await db.query( usuariosPropriedades.selectUsuariosPropriedades, pro_id)
            
            //SUCESSO
            return response.status(200).json({
                confirma:true,
                message: "Sucesso",
                res:resSelect[0][0],
            })

        } catch (error) {
           //RETORNA ERROS NÃO TRATADOS
            return response.status(500).json({
                message:"erro",
                error: error
            }) 
        }
    },
    async Editar(request, response) {
        try {
            const {usu_id, permicao} = request.body;
            const {pro_id} = request.params;
            const token = request.headers["authorization"];

            //VERIFICA OS CAMPOS OBRIGATORIOS
            if (!(pro_id && usu_id && permicao)) {
                //CAMPO NULO
                return response.status(400).json({
                    confirma: false,
                    message: "campo nulo"
                });
            }

            //VERIFICA O TOKEN
            const user = verificarToken(token);
            
            //VERIFICA O TOKEN E SE O USUÁRIO DO TOKEN É O USUÁRIO QUE ESTA ALTERANDO O DADO
            if(!(user && user.usu_id == usu_id)){
                //SEM AUTORIZAÇÃO
                return response.status(401).json({
                    confirma: false,
                    message: "Sem permição",
                })
            }

            //VERIFICAR SE O USUÁRIO TEM A PERMIÇÃO DE ADMIN NA PROPRIEDADE
            const res = await db.query( usuariosPropriedades.selectUsuarioPermicao, [ user.usu_id, pro_id ])
            if(!res[0][0].uspr_permicao  === "admin"){
                //RETORNA ERROS NÃO TRATADOS
                return response.status(403).json({
                    confirma: false,
                    message:"Permição Insuficiente",
                })
            }

            //EDITA A PERMICAO DO USUARIO NA PROPRIEDADE
            await db.query( usuariosPropriedades.editar, [ permicao, usu_id, pro_id])

            //RETORNA SUSCESO
            return response.status(200).json({
                confirma:true,
                message: "susceso"
            })

        } catch (error) {
            //RETORNA ERROS NÃO TRATADOS
            return response.status(500).json({
                message: "erro",
                error: error
            });
        }
    }
}