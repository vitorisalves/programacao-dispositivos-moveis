import { createContext, useState } from "react"

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [usuario, setUsuario] = useState({login: null, logado: false})

    return <AuthContext.Provider value={{usuario}}>
        {children}
    </AuthContext.Provider>
}

export default {AuthContext, AuthProvider}