import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import { Login } from './components/Login/Login'
import { Home } from './components/Home/Home'
import { App } from './App'
import { RequireAuth } from './services/RequireAuth'
import { Profile } from './components/Profile/Profile'
import { AuthProvider } from './services/Auth'
import { Admin } from './components/Admin/Admin'
import { Products } from './components/Admin/Products/Products'
import { Dashboard } from './components/Admin/Dashboard/Dashboard'
import { Category } from './components/Admin/Category/Category'
import { Cart } from './components/Profile/Cart/Cart'
import { Info } from './components/Profile/Info/Info'
import { Orders } from './components/Profile/Orders/Orders'
import { AdminOrders } from './components/Admin/Orders/AdminOrders'

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
          {
            path: "profile", element: <Profile />,
            children: [
              { index: true, element: <Info /> },
              { path: "cart", element: <Cart /> },
              { path: "orders", element: <Orders/>}
            ]
          }
        ]
      },

      {
        element: <RequireAuth adminPage={true} />,
        children: [
          {
            path: "admin", element: <Admin />,
            children: [
              { index: true, element: <Dashboard /> },
              { path: "dashboard", element: <Dashboard /> },
              { path: "products", element: <Products /> },
              { path: "category", element: <Category /> },
              { path: "orders", element: <AdminOrders /> }
            ]
          }
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
