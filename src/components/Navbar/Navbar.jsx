import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useAuth } from '../../services/Auth'
import { Home, User, LogIn, LogOut, Menu, X } from 'lucide-react';

export const Navbar = () => {

    const auth = useAuth();
    const [user, setUser] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    useEffect(() => {
        setUser(auth.user)
    },[auth.user])

    const handleLogOut = () => {
        setUser(null);
        setIsMenuOpen(false);
        auth.logout();
    };

    const handleLogin = () => {
    setUser({ name: 'Demo User' });
    setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

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
            {!user && (
              <NavLink to="/login" className="navbar-link" onClick={handleLogin}>
                <LogIn size={18} />
                Login
              </NavLink>
            )}
            {user && (
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
