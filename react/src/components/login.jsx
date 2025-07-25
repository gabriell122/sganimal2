import { useState, useContext } from "react";
import ConexaoApi from "../utils/axios";
import { ErrorApi, ErrorDados, LoginError, LoginSuccess } from "../utils/swal";
import { UsuarioContext } from "../utils/context";
import { useNavigate } from "react-router-dom";
const  Login = ({setLogin})=>{
    const [email, setEmail] = useState("");
    const [senha , setSenha] = useState("");
    const {setUsuario} = useContext(UsuarioContext);
    const navigate = useNavigate()
    const Logar = async ()=>{
                

        if (email && senha) {
            const values = {
                email: email,
                senha: senha
            }
            try {
                
                const res = await ConexaoApi.post( "/login", values);
                setUsuario({user:res.data.res, token:res.data.token})
                LoginSuccess();
                navigate("/user")
                
            } catch (error) {
                if(error.response?.status=== 401 || error.response?.status=== 404){
                    LoginError();
                }else{
                    ErrorApi();
                }
            }
        }else{
            ErrorDados();
        }
    }

    return(
        <div key="login" className="pa z2 c6 r0 bsbb h1 cinza brr10 df fdc ac jcc cm9 cl12 brlow10 wm400">
            <h2 className="fs2 ">
                Login
            </h2>
            <div className="w1 h010 df jcc mt0066">
                <input 
                    className="h1 w075 bsbb br10 pl10 fs15" 
                    type="email" 
                    id="email" 
                    placeholder="Email"
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    value={email}
                />
            </div>
            <div className="w1 h010 df jcc mt0066">
                <input 
                    className="h1 w075 bsbb br10 pl10 fs15" 
                    type="password" 
                    placeholder="Senha"
                    onChange={(e)=>{
                        setSenha(e.target.value)
                    }}
                    value={senha}
                />
            </div>
            <div className="w1 h010 df jcc mt0066 ">
                <input 
                    className="h1 w075 bsbb br10 pl10 fs15 verde-button bnone" 
                    type="button" 
                    onClick={()=>{
                        Logar();
                    }}
                    value="Entrar"
                />
            </div>
            <p 
                className="mt0066 link" 
                onClick={()=>{setLogin(false)}}
            >
                Criar conta
            </p>
        </div>
    )
}
export default Login;;