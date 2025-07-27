//CONEXÃO COM BANCO DE DADOS
const db = require("../db/index");
//SQL
const usuarios = require("../sql/usuarios");
const { gerarHash, verificarSenha } = require("../utils/bcrypt");
const { gerarToken, verificarToken } = require("../utils/jwt");

module.exports = {

    //LOGIN
    async Login( request, response){
        try {
            
            //RECEBE OS DADOS
            const { email, senha } = request.body;

            //VERIFICA OS CAMPOS OBRIGATORIOS
            if(!(email && senha)){
                //CAMPO NULO
                return response.status(400).json({
                    confirma: false,
                    message: "campo nulo",
                })
            }

            //VERIFICA O EMAIL E BUSCA O HASH
            const resHash = await db.query( usuarios.login, [email]);
            if(!resHash[0][0]){
                //EMAIL INVALIDO
                return response.status(404).json({
                    confirma: false,
                    message: "email invalido",
                })
            }

            //VERIFICA A SENHA COM HASH
            const resValidada =  await verificarSenha( senha, resHash[0][0].usu_senha );

            //VALIDA A RESPOSTA
            if(!resValidada){
                //SENHA INVALIDO
                return response.status(401).json({
                    confirma: false,
                    message: "senha invalida",
                })
            }

            //BUSCA OS DADOS DO USUARIO
            const resUsuario =  await db.query( usuarios.select, resHash[0][0].usu_id);
            
            //GERAR TOKEN JWT
            const token = gerarToken(resUsuario[0][0]);
            
            //SUSCESO
            return response.status(200).json({
                confirma:true,
                message: "susceso",
                res:resUsuario[0][0],
                token: token
            })

        } catch (error) {
            //RETORNA ERROS NÃO TRATADOS
            return response.status(500).json({
                message:"erro",
                error: error
            })
        }

    },

    //CADASTRO USUARIOS
    async Cadastro(request, response) {
        try {

            //RECEBE OS DADOS
            const { nome, email, senha, telefone, foto} = request.body;

            //VERIFICA OS CAMPOS OBRIGATORIOS
            if(!(nome && email && senha)){
                //CAMPO NULO
                return response.status(400).json({
                    confirma: false,
                    message: "campo nulo",
                })
            }

            //VALIDAÇÃO DO EMAIL
            const resEmail = await db.query( usuarios.emailDup, [email]);
            if (resEmail[0][0]?.DUP) {
                return response.status(409).json({
                    confirma:false,
                    message:"email duplicado",
                })
            }

            //GERA O HASH DA SENHA
            const hash = await  gerarHash(senha);
            
            //CADASTRO DO USUARIO
            await db.query( usuarios.create, [ nome, email, hash, telefone??null, foto??null])

            //SUSCESO
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
    
    //EDITAR USUÁRIO
    async Editar(request,response){
        try {

            //RECEBE OS DADOS
            const { nome, email, telefone, foto} = request.body;
            const { usu_id } = request.params;
            const token = request.headers["authorization"];
            
            //VERIFICA OS CAMPOS OBRIGATORIOS
            if(!(usu_id && token && nome && email )){
                //CAMPO NULO
                return response.status(400).json({
                    confirma: false,
                    message: "campo nulo",
                })
            }

            //VERIFICA O TOKEN
            const user = verificarToken(token);

            //VERIFICA SE O USUARIO QUE FEZ O PEDIDO E O MESMO QUE ESTA SENDO EDITADO
            if(!(user && user.usu_id == usu_id)){
                //SEM AUTORIZAÇÃO
                return response.status(403).json({
                    confirma: false,
                    message: "sem autorização",
                })
            }

            //VALIDAÇÃO DO EMAIL
            const resEmail = await db.query( usuarios.emailDup, [email]);
            if (resEmail[0][0]?.DUP) {
                return response.status(409).json({
                    confirma:false,
                    message:"email duplicado",
                })
            }

            //EDITA O USUÁRIO
            await db.query( usuarios.edit, [ nome, email, telefone??null, foto??null , usu_id]);
            
            //SUSCESO
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

    //DELETAR USUÁRIO
    async Deletar(request, response){
        try {
            
            //RECEBE OS DADOS
            const { usu_id } = request.params;
            const token = request.headers["authorization"];

            //VERIFICA CAMPOS OBRIGATORIOS
            if (usu_id && token) {
                
                //VERIFICA O TOKEN
                const user = verificarToken(token);
                
                //VERIFICA O TOKEN E SE O USUÁRIO DO TOKEN É O USUÁRIO QUE ESTA ALTERANDO O DADO
                if (user && user.usu_id == usu_id) {
                    
                    //DELETA O USUÁRIO
                    await db.query( usuarios.delete, usu_id);

                    //SUSCESO
                    return response.status(200).json({
                        confirma:true,
                        message: "susceso"
                    })

                } else {
                    //SEM AUTORIZAÇÃO
                    return response.status(403).json({
                        confirma: false,
                        message: "sem autorização",
                    })
                }


            } else {
                //CAMPO NULO
                return response.status(400).json({
                    confirma: false,
                    message: "campo nulo",
                })
            }

        } catch (error) {
            //RETORNA ERROS NÃO TRATADOS
            return response.status(500).json({
                message:"erro",
                error: error
            })
        }
    }
}