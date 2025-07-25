import { useNavigate } from "react-router-dom"

const Navbar = ()=>{
    const navigate =useNavigate()
    return(
        <nav className="pa t0 l0 w1 h010 df ac jcsb vermelho">
            <div className="h1 c2 cm4 cl5 df jcc ac fs2">SGA</div>
            <ul className="h1 c6 cl7 df jcsa ">
                <li className="h1 c6 df jcc ac fs15"><a className="cblack" onClick={()=>{navigate("/")}}>Início</a></li>
                <li className="h1 c6 df jcc ac fs15"><a className="cblack" onClick={()=>{navigate("/sobre")}}>Sobre</a></li>
            </ul>
        </nav>
    )
}
export default Navbar