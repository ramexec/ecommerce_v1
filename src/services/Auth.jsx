import { createContext, useContext, useEffect, useState } from "react";
import { loginbackend } from "./Login";
import { validateJwt } from "./ValidateToken";

const AuthContext = createContext(null)

export const AuthProvider = ({children}) =>{
    const [user,setUser ] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        const checkJwt = async () => {
            const token = localStorage.getItem("jwt");

            if (!token) {
            setUser(null);
            setLoading(false);
            return;
            }

            try {
            await validateJwt(token);
            setUser({ jwt: token });
            console.log("JWT valid");
            } catch (err) {
            console.log("JWT invalid");
            localStorage.removeItem("jwt");
            setUser(null);
            } finally {
            setLoading(false);
            }
        };

         checkJwt();
    }, []);


    const login = async (username,password) =>{
        setLoading(true)
        
        try{
             const res = await loginbackend(username,password);
            setUser(res)
            localStorage.setItem("jwt",res.jwt)
        }
        catch(err){
            console.log(err)
        }finally{
            setLoading(false)
        }
    }

    const logout = () => {
        localStorage.removeItem("jwt");
        setUser(null);
    };


    return <AuthContext.Provider value={{user, login , logout, loading}}>{children}</AuthContext.Provider>
}


export const useAuth = () =>{
    return useContext(AuthContext)
}