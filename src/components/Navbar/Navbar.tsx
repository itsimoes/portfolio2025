import React from 'react'
import "./style.scss"
import Link from 'next/link'

const Navbar = () => {
  return (
   <div className="navbar_wrapper" >
    <div className="navbar_container">
        <Link className='navbar_link' href="/">Home</Link>
        <Link className='navbar_link' href="/#portfolio" >Portfolio</Link>
        <Link className='navbar_link' href="/#clientes">Clientes</Link>
        <Link className='navbar_link' href="/suporte">Suporte</Link>
        <Link className='navbar_link' href="/sobre&contato">Sobre & Contato</Link>        
    </div>
   </div>
  )
}

export default Navbar