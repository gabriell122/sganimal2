import { createContext, useState } from 'react';

export const UsuarioContext = createContext(null);

export const UsuarioProvider = ({ children }) => {
    const [usuario, setUsuario] = useState({
        user:{
            usu_id:1,
            usu_nome:"gabriell haines sombra",
            usu_email:"gabriell@email.com",
            usu_telefone:"18996458371"
        },
        token:"a"
    });

    return (
        <UsuarioContext.Provider value={{ usuario, setUsuario }}>
            {children}
        </UsuarioContext.Provider>
    );
};