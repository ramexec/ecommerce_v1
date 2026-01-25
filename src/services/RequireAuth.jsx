import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "./Auth"

export const RequireAuth = () => {
  const auth = useAuth()
  const location = useLocation();

  if (auth.loading) {
    return null; 
  }

  if (auth.user === undefined) {
    return null 
  }

  if (auth.user === null) {
    return <Navigate to="/login" replace state={{path: location.pathname }}/>
  }

  return <Outlet />
}
