import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createHashRouter, RouterProvider} from 'react-router-dom'
import {Login } from './components/Login/Login'
import { Home } from './components/Home/Home'
import { App } from './App'
import { RequireAuth } from './services/RequireAuth'
import { Profile } from './components/Profile/Profile'
import { AuthProvider } from './services/Auth'
import { Admin } from './components/Admin/Admin'

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },

      {
        element: <RequireAuth />,
        children: [
          { path: "profile", element: <Profile /> }
        ]
      },

      {
        element: <RequireAuth adminPage={true} />,
        children: [
          { path: "admin", element: <Admin /> }
        ]
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
