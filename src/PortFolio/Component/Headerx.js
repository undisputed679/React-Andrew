import React from 'react'
import { NavLink } from 'react-router-dom'

function Headerx() {
  return (
    <div>
      <header>
        <h1>Portfolio</h1>
        <NavLink
          to='/'
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? "green" : "blue",
            };
          }}
        >
          Home
        </NavLink>
        
        <NavLink
          to='/pfo'
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? "green" : "blue",
            };
          }}
        >
          PortfolioPage
        </NavLink>
        <NavLink
          to='/contact'
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? "green" : "blue",
            };
          }}
        >
          Contact
        </NavLink>
        
      </header>
    </div>
  )
}

export default Headerx
