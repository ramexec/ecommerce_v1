import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useAuth } from '../../services/Auth'
import { Home, User, LogIn, LogOut, Menu, X, ShieldUser } from 'lucide-react';

export const Navbar = () => {

    const auth = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    let navigate = useNavigate();

    const handleLogOut = () => {
        setIsMenuOpen(false);
        auth.logout();
    };

    const handleLogin = () => {
    setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleAdmin = () => {
      setIsMenuOpen(!isMenuOpen);
    }
  return (
     <nav className="modern-navbar">
        <div className="navbar-container">
          <NavLink to="/" className="navbar-brand">mycommerce</NavLink>

          <button className="navbar-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
            <NavLink to="/" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              <Home size={18} />
              Home
            </NavLink>
            <NavLink to="/profile" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              <User size={18} />
              Profile
            </NavLink>
            {!auth.user && (
              <NavLink to="/login" className="navbar-link" onClick={handleLogin}>
                <LogIn size={18} />
                Login
              </NavLink>
            )}
            {auth.user && auth?.user?.role === 'ROLE_ADMIN' && (
              <NavLink to='/admin' className="navbar-admin-btn" onClick={handleAdmin}>
                <ShieldUser size={18}/>
                Admin
              </NavLink>
            )}
            {auth.user && (
              <button className="navbar-logout-btn" onClick={handleLogOut}>
                <LogOut size={18} />
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
  )
}
