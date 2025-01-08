import React from 'react'
import "./style.scss"
import Link from 'next/link'

const Navbar = () => {
  return (
   <div className="navbar_wrapper">
    <div className="navbar_container">
        <Link className='navbar_link' href="#">Portfolio</Link>
        <Link className='navbar_link' href="#">Suporte</Link>
        <Link className='navbar_link' href="#">Clientes</Link>
        <Link className='navbar_link' href="#">Sobre & Contato</Link>        
    </div>
   </div>
  )
}

export default Navbar