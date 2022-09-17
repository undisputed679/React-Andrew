import {  Route, Routes } from "react-router-dom";
import Headerx from "../Component/Headerx";
import NotFound from "../Component/NotFound";
import React from 'react'
import HomePage from "../Component/HomePage";
import ContactPage from "../Component/ContactPage";
import PortfolioPage from "../Component/PortfolioPage";
import ProtfolioItemPage from "../Component/ProtfolioItemPage";

function PortRoutes() {
  return (
    <div>
       <Headerx/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/pitem/:id" element={<ProtfolioItemPage/>}/>
            <Route path="/pfo" element={<PortfolioPage/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </div>
  )
}

export default PortRoutes


// const Headerx=()=>(
//   <header>
//     <h1>Expensify</h1>
//         <NavLink  to="/" activeClassName="active">DashBoard</NavLink>
//         <NavLink to="/create"  activeClassName="active" > CreateExpence</NavLink>
//         <NavLink to="/edit"  activeClassName="active" >EditExpence</NavLink>
//         <NavLink to="/help"  activeClassName="active"  >help</NavLink>
//   </header>
// )




