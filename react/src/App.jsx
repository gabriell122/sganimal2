import { Route, Router, Routes } from "react-router-dom";
import "./App.css"
import Home from "./pages/home";
import { UsuarioProvider } from "./utils/context";
import Sga from "./pages/sga";
import Sobre from "./pages/sobre";
import User from "./pages/user";
function App() {
  return (
    <UsuarioProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sga" element={<Sga/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/user" element={<User/>}/>
      </Routes>
    </UsuarioProvider>
  )
}

export default App
