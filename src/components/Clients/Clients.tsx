import React from 'react'
import "./style.scss"
import Image from 'next/image';
import BarrosLogo from "../../../public/images/barros_logo.svg"
import NSLogo from "../../../public/images/ns_logo.svg"

const Clients = () => {
    return (
        <div id="clientes" className="clients_wrapper">
            <div className="clients_container">
                <div className="clients_title">
                    <h2>Clientes.</h2>
                    <div className="clients_underbar"></div>
                </div>
                <div className="clients_card_container">
                    <a href="https://www.barrosconsultoriaeconcessoes.com/" target="_blank"><Image src={BarrosLogo} alt='' /></a>
                    <a href="https://itsimoes.github.io/ns-advocacia/" target="_blank"><Image src={NSLogo} alt='' /></a>
                </div>
                <div className='clients_contato_link'>Contato.</div>
            </div>
        </div>
    )
}

export default Clients