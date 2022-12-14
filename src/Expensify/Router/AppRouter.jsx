import {  Route, Routes } from "react-router-dom";
import AddExpencePage from "../Component/AddExpencePage";
import EditExpence from "../Component/EditExpence";
import ExpenceDashboardPage from "../Component/ExpenceDashboardPage";
import Headerx from "../Component/Headerx";
import Help from "../Component/Help";
import NotFound from "../Component/NotFound";
import "./AppRoutes.css"
import { useParams } from "react-router-dom";

import React from 'react'

function AppRouter() {
  const {id}=useParams();
  return (
    <div>
       <Headerx/>
        <Routes>
            <Route path="/" element={<ExpenceDashboardPage/>}/>
            <Route path="/create" element={<AddExpencePage/>}/>
            <Route path="/edit/:id" element={<EditExpence/>}/>
            <Route path="/help" element={<Help/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </div>
  )
}

export default AppRouter


// const Headerx=()=>(
//   <header>
//     <h1>Expensify</h1>
//         <NavLink  to="/" activeClassName="active">DashBoard</NavLink>
//         <NavLink to="/create"  activeClassName="active" > CreateExpence</NavLink>
//         <NavLink to="/edit"  activeClassName="active" >EditExpence</NavLink>
//         <NavLink to="/help"  activeClassName="active"  >help</NavLink>
//   </header>
// )




