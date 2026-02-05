import React, { useEffect, useState } from 'react';
import './Admin.css';
import { MoveRight } from 'lucide-react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

export const Admin = () => {
  const location = useLocation();
  const [tab, setTab] = useState('dashboard');

  useEffect(() => {
    const current = location.pathname.split('/').pop();
    setTab(current || 'dashboard');
  }, [location]);

  const currentTabTitle = tab.toUpperCase();

  return (
    <div className="admin-container">

      {/* Sidebar */}
      <div className="admin-navigation">
        <ul className="admin-navigation-links">
          <li className={tab === 'dashboard' ? "active" : ""}>
            <NavLink to="dashboard" className="nav-text">Dashboard</NavLink>
          </li>
          <li className={tab === 'products' ? "active" : ""}>
            <NavLink to="products" className="nav-text">Products</NavLink>
          </li>
          <li className={tab === 'category' ? "active" : ""}>
            <NavLink to="category" className="nav-text">Category</NavLink>
          </li>
          <li className={tab === 'orders' ? "active" : ""}>
            <NavLink to="orders" className="nav-text">Orders</NavLink>
          </li>
        </ul>

        {/* Mobile nav */}
        <ul className="admin-navigation-links-mobile">
          <li className={tab === 'dashboard' ? "active" : ""}>
            <NavLink to="dashboard" className="nav-text">Dashboard</NavLink>
          </li>
          <li className={tab === 'products' ? "active" : ""}>
            <NavLink to="products" className="nav-text">Products</NavLink>
          </li>
          <li className={tab === 'category' ? "active" : ""}>
            <NavLink to="category" className="nav-text">Category</NavLink>
          </li>
          <li className={tab === 'orders' ? "active" : ""}>
                <NavLink to="orders" className="nav-text">Orders</NavLink>
          </li>
          <li>
            <select defaultValue={"more"} name="admin-navigation-links-mobile-options">
              <option disabled value="more">More</option>
              <option></option>
              <option>Some option</option>
            </select>
          </li>
        </ul>
      </div>

      {/* Main Body */}
      <div className="admin-body">
        <div className="admin-title">
          <div>AdminPanel</div>
          <MoveRight size={18} className="muted" />
          <div>{currentTabTitle}</div>
        </div>
        <div className="admin-render">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
