import { jwtDecode } from "jwt-decode"

export const decodeJwt = () => {
    const token = localStorage.getItem("jwt");
    if(token == null || token == "")
    {
        console.log("Sign in first !");
    }
    const decoded = jwtDecode(token)
    return decoded;
}