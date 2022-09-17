import React from 'react'
import { Link } from 'react-router-dom'

function PortfolioPage() {
  return (
    <div>
      <h1>My Work</h1>
      <p>Checkout stuff i have done: </p>
      <Link to={"/pitem/1"} >item One</Link>
      <Link to={"/pitem/2"} >Item Two</Link>
    </div>
  )
}

export default PortfolioPage
