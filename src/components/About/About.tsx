import React from 'react'
import "./style.scss"
import Image from 'next/image';
import avatar from "../../../public/images/italo_avatar.png"


const About = () => {
    return (
        <div className="about_wrapper">
            <div className="about_container">
                <div className="about_card_container">
                    <div className="about_title">
                        <h2>Ítalo Simões.</h2>
                        <div className="about_underbar"></div>
                        <p>Natural do estado do Maranhão, graduado pela Universidade Federal do Maranhão (UFMA) no curso de Ciência da Computação, venho atuando no desenvolvimento web desde 2021.</p>
                        <p>Utilizando frequentemente como principais tecnologias React, Next, Angular, Javascript, Typescript, além de HTML5 e CSS3, venho desenvolvendo aplicações Web com foco em acessibilidade, praticidade e usabilidade para que todos os usuários possam ser incluídos e consigam utilizar as aplicações de acordo com sua necessidade.
                        Busco sempre eficiência e simplicidade na criação de projetos para que sua utilização seja intuitiva, eficaz e prazerosa por parte dos usuários.</p>
                    </div>
                    <Image className="about_card_image" src={avatar} alt="" />
                </div>
                <div className="about_card_container">
                    <p>Me envie uma mensagem através do email <a href='mailto:itsimoes1@gmail.com'>itsimoes1@gmail.com</a> ou entre em contato no whatsapp <a href="https://wa.me/5598988533149" target='_blank'>+55 98 988533149</a>.</p>
                </div>
            </div>
        </div>
    )
}

export default About