import React from 'react'
import { NavLink } from 'react-router-dom'

function Headerx() {
  return (
    <div>
      <header>
        <h1>Expensify</h1>
        <NavLink
          to='/'
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? "green" : "blue",
            };
          }}
        >
          DashBoard
        </NavLink>
        <NavLink
          to='/create'
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? "green" : "blue",
            };
          }}
        > CreateExpence
        </NavLink>
        <NavLink
          to='/edit'
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? "green" : "blue",
            };
          }}
        >
          EditExpence
        </NavLink>
        <NavLink
          to='/help'
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? "green" : "blue",
            };
          }}
        >
        help
        </NavLink>
      </header>
    </div>
  )
}

export default Headerx
