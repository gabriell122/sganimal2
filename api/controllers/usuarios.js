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
            if ( email && senha ) {
                
                //VERIFICA O EMAIL E BUSCA O HASH
                const resHash = await db.query( usuarios.login, [email]);

                //VALIDA RESPOSTA
                if (resHash[0][0]) {

                    //VERIFICA A SENHA COM HASH
                    const resValidada =  await verificarSenha( senha, resHash[0][0].usu_senha );

                    //VALIDA A RESPOSTA
                    if (resValidada) {
                        const resUsuario =  await db.query( usuarios.dados, resHash[0][0].usu_id);

                        //GERAR TOKEN JWT
                        const token = gerarToken(resUsuario[0][0]);
                        
                        //SUSCESO
                        return response.status(200).json({
                            confirma:true,
                            message: "susceso",
                            res:resUsuario[0][0],
                            token: token
                        })
                    } else {
                        //SENHA INVALIDO
                        return response.status(401).json({
                            confirma: false,
                            message: "senha invalida",
                        })
                    }

                }else{
                    //EMAIL INVALIDO
                    return response.status(404).json({
                    confirma: false,
                    message: "email invalido",
                })
                }
            }else{
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

    },

    //CADASTRO USUARIOS
    async Cadastro(request, response) {
        try {

            //RECEBE OS DADOS
            const { nome, email, senha, telefone, foto} = request.body;

            //VERIFICA CAMPOS OBRIGATORIOS
            if( nome && email && senha ){
                
                //VALIDAÇÃO DO EMAIL
                const resEmail = await db.query( usuarios.email, [email]);
                if (resEmail[0][0]?.DUP) {
                    return response.status(409).json({
                        confirma:false,
                        message:"email duplicado",
                    })
                }
                //GERA O HASH DA SENHA
                const hash = await  gerarHash(senha);
                
                //CADASTRO DO USUARIO
                const resCadastro = await db.query( usuarios.cadastro, [ nome, email, hash, telefone??null, foto??null])

                //SUSCESO
                return response.status(200).json({
                    confirma:true,
                    message: "susceso",
                    res:resCadastro
                })

            }else{
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

    },
    
    //EDITAR USUÁRIO
    async Editar(request,response){
        try {

            //RECEBE OS DADOS
            const { nome, email, telefone, foto} = request.body;
            const { id } = request.params;
            const token = request.headers["authorization"];
            
            //VERIFICA CAMPOS OBRIGATORIOS
            if ( id && token && nome && email) {
                
                //VERIFICA O TOKEN
                const user = verificarToken(token);
                
                //VERIFICA O TOKEN E SE O USUÁRIO DO TOKEN É O USUÁRIO QUE ESTA ALTERANDO O DADO
                if ( user &&  user.usu_id == id ) {
                    //VALIDAÇÃO DO EMAIL
                    if ( !(user.usu_email == email)) {
                        const resEmail = await db.query( usuarios.email, [email]);
                        if (resEmail[0][0]?.DUP) {
                            return response.status(409).json({
                                confirma:false,
                                message:"email duplicado",
                            })
                        } 
                    }

                    //EDITA O USUÁRIO
                    const editar = await db.query( usuarios.editar, [ nome, email, telefone??null, foto??null , id]);
                    
                    //SUSCESO
                    return response.status(200).json({
                        confirma:true,
                        message: "susceso"
                    })

                }else{
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
    },

    //DELETAR USUÁRIO
    async Deletar(request, response){
        try {
            
            //RECEBE OS DADOS
            const { id } = request.params;
            const token = request.headers["authorization"];

            //VERIFICA CAMPOS OBRIGATORIOS
            if (id && token) {
                
                //VERIFICA O TOKEN
                const user = verificarToken(token);
                
                //VERIFICA O TOKEN E SE O USUÁRIO DO TOKEN É O USUÁRIO QUE ESTA ALTERANDO O DADO
                if (user && user.usu_id == id) {
                    
                    //DELETA O USUÁRIO
                    const deletar = await db.query( usuarios.delete, id);

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