import React from 'react'
import '../App.css'
import {NavLink  } from 'react-router-dom'
import { Noty } from './Noty'

function Navbar({count,setCount,showModal,setShowModal }) {
  return (
    <div className='a'>
    <h1 className="heading-1"> GIFTOS</h1>
    <div className='navbar'>
      <div style={{width:"70%",display:'flex',justifyContent:'start',gap:"40px"}}>
      <div className='nav'> <NavLink className='nav'  to='/home'>HOME</NavLink></div>
     <div className='nav'> <NavLink className='nav' to='/shop'>SHOP</NavLink></div>
     <div className='nav'> <NavLink className='nav' to='/whyus'>WHYUS</NavLink></div>
      <div className='nav'> <NavLink className='nav' to='/contact'>CONTACT US</NavLink></div>
      <div className='nav'>  <NavLink className='nav' to='/testimonial'>TESTIMONIAL</NavLink></div>
      </div>
      <>  <Noty count={count} setCount={setCount} showModal={showModal} setShowModal={setShowModal} /></>
      <div>
       <NavLink className='nav'to='/'>LOGIN</NavLink></div>
    </div>
    </div>
  )
}

export default Navbar