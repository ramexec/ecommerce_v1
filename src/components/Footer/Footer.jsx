import { Mail, Phone, MapPin, Heart } from 'lucide-react';
import './Footer.css'
import facebookIcon from "../../assets/svg/facebook.svg";
import instagramIcon from "../../assets/svg/instagram.svg";
import githubIcon from "../../assets/svg/github.svg";
import x from "../../assets/svg/x.svg"
import { NavLink } from 'react-router-dom'

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section">
            <h3 className="footer-section-title">About Us</h3>
            <p className="footer-description">
              I provide high-quality development and design services to help businesses grow and succeed in the digital world.
            </p>
            <div className="footer-social-links">
              <a href="#" className="footer-social-icon" aria-label="Facebook">
                <img src={facebookIcon} width={20} height={20} />
              </a>
              <a href="#" className="footer-social-icon" aria-label="X">
                <img src={x} width={20} height={20} />
              </a>
              <a href="#" className="footer-social-icon" aria-label="Instagram">
                <img src={instagramIcon} width={20} height={20} />
              </a>
              <a href="#" className="footer-social-icon" aria-label="GitHub">
                <img src={githubIcon} width={20} height={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-section-title">Quick Links</h3>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <NavLink to="/home" className="footer-link">Home</NavLink>
              </li>
              {/* <li className="footer-link-item">
                <a href="#" className="footer-link">Services</a>
              </li> */}
              <li className="footer-link-item">
                <a href="https://ramexec.github.io/my_frontend/" className="footer-link">Portfolio</a>
              </li>
              <li className="footer-link-item">
                <a href="https://ramexec.github.io/my_frontend/" className="footer-link">About</a>
              </li>
              <li className="footer-link-item">
                <a href="#" className="footer-link">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-section-title">Contact Me</h3>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <Mail size={18} />
              </div>
              <span>rahulanthonymondal@gmail.com</span>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <Phone size={18} />
              </div>
              <span>Through Contact us!</span>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <MapPin size={18} />
              </div>
              <span>India, West Bengal</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} MyCommerce . Made with 
            <Heart size={16} className="footer-heart" fill="currentColor" />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}