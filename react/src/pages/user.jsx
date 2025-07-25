import { useContext, useEffect, useState } from "react"
import Navbar from "../components/navbar"
import { UsuarioContext } from "../utils/context";
import { AtualizacaoSucesso, EmailDuplicado, EmailInvalido, ErrorApi, ErrorDados, TelefoneInvalido } from "../utils/swal";
import validarEmail from "../utils/validacoes/email";
import validarTelefone from "../utils/validacoes/telefone";
import ConexaoApi from "../utils/axios";

const User = ()=>{
    // Editar Usuário
    // Editar Senha 
    // Editar Foto
    const {usuario, setUsuario} = useContext(UsuarioContext);
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState( "");
    const [telefone, setTelefone] = useState("");
    const [tela, setTela] = useState("editar")
  useEffect(()=>{console.log(usuario);
  },[usuario])
    useEffect(()=>{
        if (usuario) {
            setNome(usuario.user.usu_nome.split(" ")[0]??"")
            setSobrenome(usuario.user.usu_nome.split(" ").slice(1).join(" ")??"")
            setEmail(usuario.user.usu_email??"")
            setTelefone(usuario.user.usu_telefone??"")
        }
    },[])

    const Salvar = async ()=>{
        
        if (!(nome && sobrenome && email && telefone)) {
            ErrorDados();
            return;
        }

        if (!validarEmail(email)){
            EmailInvalido();
            return;
        }
        
        if (!validarTelefone(telefone)) {
            TelefoneInvalido();
            return;
        }

        try {
            const values = {
                nome: nome + " " + sobrenome,
                email:email,
                telefone:telefone
            }
            console.log(usuario.user.usu_id);
            
            // const res = await ConexaoApi.put(
            //         `/usuarios/${usuario.user.usu_id}`, 
            //         values, 
            //     {
            //         headers : {
            //             Authorization: usuario.token
            //         }
            //     }
            // )
            AtualizacaoSucesso();
            setUsuario(prev=>({
                ...prev,
                user:{
                    ...prev.user,
                    usu_nome:nome + " " + sobrenome,
                    usu_email:email,
                    usu_telefone: telefone
                }
            }))            
        } catch (error) {
            console.log(error);
            
            if(error.response?.status=== 409){
                EmailDuplicado();
            }else{
                ErrorApi();
            }
        }

    }

    return(
        <div className="body pr bcb">
            <div className="w1 h1 pr ">
                <Navbar/>
                <div className="c2 h090 pa t010 cinza l0 df ac fdc">
                    <div 
                        className="h005 c12 df ac jcc " 
                        onClick={()=>{
                            setTela("editar")
                        }}
                    >
                        <span className="fs15">
                            editar
                        </span>
                    </div>
                    <span onClick={()=>{
                        setTela("home")
                    }}>
                        home
                    </span>
                </div>
                <div className="c10 mleft2 h090 pa t010 df ac jcc">
                    {
                        tela === "editar"
                        ?
                            <div className="c8 h300 cinza br10 df ac jcsa wm600 hl400 fww">
                                {/* Editar Usuario */}
                                <div className="fs2 c12 df ac jcc">Editar dados</div>
                                <input 
                                    type="text" 
                                    placeholder="nome" 
                                    className="c5 cm5 cl11 h40 bsbb br10 pl10 fs15 fww"
                                    onChange={(e)=>{
                                        setNome(e.target.value)
                                    }}
                                    value={nome}
                                /> 
                                <input 
                                    type="text" 
                                    placeholder="sobrenome" 
                                    className="c5 cm5 cl11 h40 bsbb br10 pl10 fs15 mtl10 fww"
                                    onChange={(e)=>{
                                        setSobrenome(e.target.value)
                                    }}
                                    value={sobrenome}
                                />   
                                <input 
                                    type="email" 
                                    placeholder="email" 
                                    className="c5 cm11 cl11 h40 bsbb br10 pl10 fs15"
                                    onChange={(e)=>{
                                        setEmail(e.target.value)
                                    }}
                                    value={email}
                                />
                                <input 
                                    type="text" 
                                    placeholder="telefone" 
                                    className="c5 cm11 cl11 h40 bsbb br10 pl10 fs15"
                                    onChange={(e)=>{
                                        setTelefone(e.target.value)
                                    }}
                                    value={telefone}
                                />
                                <input 
                                    type="button" 
                                    value="Editar" 
                                    className="c5 cl11 h40 br10 pl10 fs15 verde-button bnone"
                                    onClick={()=>{
                                        Salvar();
                                    }}
                                />
                                <input 
                                    type="button" 
                                    value="Cancelar" 
                                    className="c5 cl11 h40 br10 pl10 fs15 verde-button bnone mtl10"
                                />
                            </div>
                        :
                        tela == "home"
                        ?
                        "a"
                        :
                        ""
                    }
                </div>
            </div>
        </div>
    )
}
export default User