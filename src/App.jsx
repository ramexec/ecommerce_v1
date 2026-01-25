import "./App.css"
import { Outlet } from 'react-router-dom'
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"

export const App = () => {
  return (
    <div className="container">
      <Header />
        <Outlet />
      <Footer />
    </div>
  )
}
