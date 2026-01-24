import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {Login } from './components/Login/Login'
import { Home } from './components/Home/Home'
import { App } from './App'
import { RequireAuth } from './services/RequireAuth'
import { Profile } from './components/Profile/Profile'
import { AuthProvider } from './services/Auth'

const router = createBrowserRouter([
  {
    path: "/ecommerce_v1",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },

      {
        element: <RequireAuth />,
        children: [
          { path: "profile", element: <Profile /> }
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
