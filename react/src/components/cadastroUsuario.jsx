import { useState } from "react";
import { CadastroSuccess, EmailDuplicado, EmailInvalido, ErrorDados, SenhaFraca, SenhaNaoConfere } from "../utils/swal";
import ConexaoApi from "../utils/axios";
import validarEmail from "../utils/validacoes/email";
import senhaForte from "../utils/validacoes/senha";

const CadastroUsuario = ({setLogin})=>{
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senha2, setSenha2] = useState("");

    
   
    const CadastrarUsuario = async () =>{

        //VERIFICA SE TODOS OS CAMPOS ESTÃO PREENCHIDOS
        if (!(nome && sobrenome && email && senha && senha2)) {
            ErrorDados();
            return;
        }

        //VERIFICA SE OS CAMPOS DE SENHAS SÃO IGUAIS
        if (!(senha === senha2)) {
            SenhaNaoConfere();
            return;    
        }
        
        //VERIFICA SE O EMAIL É VALIDO
        if (!validarEmail(email)) {
            EmailInvalido()
            return;
        }

        //VERIFICA SE A SENHA É FORTE
        if(!senhaForte(senha)){
            SenhaFraca();
            return;;
        }

        
        try {
            const values = {
                nome: nome + " " + sobrenome,
                email: email,
                senha: senha
            }
            const res = await ConexaoApi.post("/usuarios", values);
            console.log(res);
            CadastroSuccess();

        } catch (error) {
            if(error.response?.status=== 409){
                EmailDuplicado();
            }else{
                ErrorApi();
            }
        }
        


    }
    return(
        <div key="cadastro" className="pa z2 c9 cm12 cl12 cinza df fdc ac jcc gap005 h1 brmid10 brlow10 brl10 hl11 wm600">
            <h2 className="fs2">Cadastrar-se</h2>
            <div className="df jcsa h010 hl020  fdclow w1 ac jcsbl ">
                <input 
                    type="text" 
                    placeholder="Nome" 
                    className="h1 hl040 c5 cl11 bsbb br10 pl10 fs15"
                    value={nome}
                    onChange={(e)=>{
                        setNome(e.target.value)
                    }}
                />
                <input 
                    type="text" 
                    placeholder="Sobrenome"
                    className="h1 hl040 c5 cl11 bsbb br10 pl10 fs15"
                    value={sobrenome}
                    onChange={(e)=>{
                        setSobrenome(e.target.value)
                    }}
                />
            </div>
            <div className="df jcsb c11 h010 hl008 ">
                <input 
                    type="email" 
                    placeholder="Email"
                    className="h1 br10 pl10 fs15 w1 bsbb"
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                />
            </div>
            <div className="df jcsa h010 hl020  fdclow w1 ac jcsbl">
                <input 
                    type="password" 
                    placeholder="Senha" 
                    className="h1 hl040 c5 cl11 bsbb br10 pl10 fs15"
                    value={senha}
                    onChange={(e)=>{
                        setSenha(e.target.value);
                    }}
                />
                <input 
                    type="password" 
                    placeholder="Repita a senha" 
                    className="h1 hl040 c5 cl11 bsbb br10 pl10 fs15 mtlow005"
                    value={senha2}
                    onChange={(e)=>{
                        setSenha2(e.target.value)
                    }}
                />
            </div>
            <div className="w1 h010 df jcc hl008 ">
            <input 
                type="button" 
                value="Cadastrar-se" 
                className="h1 w075 bsbb br10 pl10 fs15  cl11 verde-button bnone" 
                onClick={()=>{
                    CadastrarUsuario();
                }}
            />
            </div>
            <span
            className="link "
            onClick={()=>{
                setLogin(true)
            }}
            >
            Já tenho uma conta
            </span>
        </div>
    )
}
export default CadastroUsuario;