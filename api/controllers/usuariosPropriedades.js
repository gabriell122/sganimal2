const { verificarToken } = require("../utils/jwt");
const usuariosPropriedades = require("../sql/usuariosPropriedades")
module.exports ={
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
                return response.status(403).json({
                    confirma: false,
                    message: "Sem permição",
                })
            }

            //VERIFICAR SE O USUÁRIO TEM A PERMIÇÃO DE ADMIN NA PROPRIEDADE
            const res = await db.query( usuariosPropriedades.selectUsuarioPermicao, [ user.usu_id, pro_id ])
            if(!res[0][0].uspr_permicao  === "admin"){
                //RETORNA ERROS NÃO TRATADOS
                return response.status(500).json({
                    confirma: false,
                    message:"Permição Insuficiente",
                })
            }

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
    async PermicoesUsuariosPropriedades(){

    }
}