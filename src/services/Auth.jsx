import { createContext, useContext, useState } from "react";
import { loginbackend } from "./Login";

const AuthContext = createContext(null)

export const AuthProvider = ({children}) =>{
    const [user,setUser ] = useState(null)

    const login = async (username,password) =>{
        try{
             const res = await loginbackend(username,password);
            setUser(res)
        }
        catch(err){
            console.log(err)
        }
    }

    const logout = () => {
        setUser(null)
    }

    return <AuthContext.Provider value={{user, login , logout}}>{children}</AuthContext.Provider>
}


export const useAuth = () =>{
    return useContext(AuthContext)
}