import React from 'react'
import "./style.scss";
import Image from 'next/image';
import itsimoesLOGO from "../../../public/images/itsimoes_LOGO.svg"

const Homepage = () => {
  return (
    <div className="home_wrapper">
      <div className="home_container">
        <div className="homebg"> {/*mocUp - home bg*/}
          <Image className='homeLOGO' src={itsimoesLOGO} alt='' />
        </div>
        <h1 className="home_h1">Desenvolvedor Web. Suporte de TI. Help Desk.</h1>
      </div>

    </div>
  )
}

export default Homepage