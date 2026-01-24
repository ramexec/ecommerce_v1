import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "./Auth"

export const RequireAuth = () => {
  const auth = useAuth()
  console.log("RequireAuth user:", auth.user)

  if (auth.user === undefined) {
    return null 
  }

  if (auth.user === null) {
    return <Navigate to="/ecommerce_v1/login" replace />
  }

  return <Outlet />
}
