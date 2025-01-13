import React from 'react'
import "./style.scss"
import Image from 'next/image';

import sup01 from "../../../public/images/supportImg01.png"
import sup02 from "../../../public/images/supportImg02.png"
import img01 from "../../../public/images/support_img_01.png"
import img02 from "../../../public/images/support_img_02.png"
import img03 from "../../../public/images/support_img_03.png"

const Support = () => {
  return (
    <div className="support_wrapper">
      <div className="support_container">
        <div className="support_card_container">
          <div className="support_title">
            <h2>Suporte de TI.</h2>
            <div className="support_underbar"></div>
            <p>Serviços de suporte de TI, como formatação, higienização de hardware, instalação de programas, consultoria na aquisição de hardware e software.</p>
          </div>
          <Image className="support_card_image" src={sup01} alt="" />
        </div>
        <div className="support_card_container">
        <Image className="support_card_image" src={sup02} alt="" />
          <div className="support_title_2">
            <h2>Help Desk.</h2>
            <div className="support_underbar_2"></div>
            <p>Help desk avançado, auxiliando em situações de suporte remoto.</p>
          </div>
        </div>
        <div className="support_images_container">
        <Image className="support_image" src={img01} alt="" />
        <Image className="support_image" src={img02} alt="" />
        <Image className="support_image" src={img03} alt="" />

        </div>
        <div className='support_contato_link'><a href="https://wa.me/5598988533149" target='_blank'>Contato.</a></div>
      </div>
    </div>
  )
}

export default Support