import React, { useState } from 'react'
import './Admin.css'
import { MoveRight } from 'lucide-react';
import { NavLink, Outlet } from 'react-router-dom'

export const Admin = () => {

  const [tab,setTab] = useState('dashboard');

  return (
    <div className="admin-container">
      <div className="admin-navigation">
        <ul className='admin-navigation-links'>
          <li className={tab === 'dashboard' ? "active" : " "} onClick={() => setTab('dashboard')}><NavLink to="dashboard" className='nav-text'>Dashboard</NavLink></li>
          <li className={tab === 'products' ? "active" : " "} onClick={() => setTab('products')}><NavLink to="products" className='nav-text'>Products</NavLink></li>
          <li className={tab === 'category' ? "active" : " "} onClick={() => setTab('category')}><NavLink to="category" className='nav-text'>Category</NavLink></li>
        </ul>
        <ul className="admin-navigation-links-mobile">
          <li className={tab === 'dashboard' ? "active" : " "} onClick={() => setTab('dashboard')}><span className='nav-text'>Dashboard</span></li>
          <li className={tab === 'products' ? "active" : " "} onClick={() => setTab('products')}><span className='nav-text'>Products</span></li>
          <li className={tab === 'category' ? "active" : " "} onClick={() => setTab('category')}><span className='nav-text'>Category</span></li>
          <li>
            <select defaultValue={"more"}name="admin-navigation-links-mobile-options" id="">
              <option disabled value={"more"}> More</option>
              <option>some option</option>
              <option> some option </option>
            </select>
          </li>
        </ul>
      </div>
      <div className="admin-body">
          <div className="admin-title">
            <div>AdminPanel</div> 
            <MoveRight size={18} className='muted'/>
            <div>{tab.toUpperCase()}</div>
            </div>
          <div className="admin-render">
            <Outlet />
          </div>
      </div>
    </div>
  )
}
