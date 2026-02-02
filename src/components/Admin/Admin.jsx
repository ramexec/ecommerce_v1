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
          <li className={tab === 'dashboard' ? "active" : " "} ><NavLink to="dashboard" className='nav-text' onClick={() => setTab('dashboard')}>Dashboard</NavLink></li>
          <li className={tab === 'products' ? "active" : " "} ><NavLink to="products" className='nav-text' onClick={() => setTab('products')}>Products</NavLink></li>
          <li className={tab === 'category' ? "active" : " "} ><NavLink to="category" className='nav-text' onClick={() => setTab('category')}>Category</NavLink></li>
        </ul>
        <ul className="admin-navigation-links-mobile">
          <li className={tab === 'dashboard' ? "active" : " "} ><NavLink to="dashboard" className='nav-text' onClick={() => setTab('dashboard')}>Dashboard</NavLink></li>
          <li className={tab === 'products' ? "active" : " "} ><NavLink to="products" className='nav-text' onClick={() => setTab('products')}>Products</NavLink></li>
          <li className={tab === 'category' ? "active" : " "} ><NavLink to="category" className='nav-text' onClick={() => setTab('category')}>Category</NavLink></li>
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
