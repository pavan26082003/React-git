import React from 'react'
import Card from './Card'
const Nav = () => {
  return (
    <div>
        <div class="navbar" style={{border:"5px solid red",background:"#8143"}}> 
    <a href="#" style={{margin:"20px"}}>Home</a>
    <a href="#" style={{margin:"20px"}}>About</a>
    <a href="#" style={{margin:"20px"}}>Services</a>
    <a href="#" style={{margin:"20px"}}>Contact</a>
    <a href="#" style={{margin:"20px"}} class="right">Login</a>
  </div>
  <Card/>

      
    </div>
  )
}

export default Nav
