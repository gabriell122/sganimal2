import { useContext, useEffect, useState } from "react"
import Login from "../components/login";
import CadastroUsuario from "../components/cadastroUsuario";
import animais from "../assets/animais.png";
import { UsuarioContext } from "../utils/context";
import Navbar from "../components/navbar";
const Home = ()=>{
  const [ login , setLogin ] = useState(true)
  const {usuario} = useContext(UsuarioContext)
  useEffect(()=>{console.log(usuario);
  },[usuario])
    return(
        <div className="body pr bcb">
            <div className="w1 h1 pr  df ac jcc fdc">
                <Navbar/>
                <div className="pr c9  h075 cl10 ">
                    <img src={animais} alt="animais" className="w1 h1 pa off br10 tln"/>
                    {
                    login
                    ?
                    <Login 
                        setLogin={setLogin}
                    />
                    :
                    <CadastroUsuario
                        setLogin={setLogin}
                    />
                    }
                </div>
            </div>
        </div>
    )
}
export default Home