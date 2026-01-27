import "./App.css"
import { Outlet } from 'react-router-dom'
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { ToastContainer } from "react-toastify"
export const App = () => {
  return (
    <div className="container">
      <Header />
        <Outlet />
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            // transition={Bounce}
          />
      <Footer />
    </div>
  )
}
