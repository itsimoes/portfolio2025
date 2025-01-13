import React from 'react'
import "./style.scss"

const Portfolio = () => {
    return (
        <div id='portfolio' className="portfolio_wrapper">
            <div className="portfolio_container">
                <div className="portfolio_title">
                    <h2>Portfolio.</h2>
                    <div className="underbar"></div>
                    <h5>Projetos profissionais e pessoais.</h5>
                </div>
                <div className="portfolio_cards_container">
                    <div id='portfolio_card_01' className="portfolio_card"><a href='https://www.barrosconsultoriaeconcessoes.com' target='_blank'><p>Barros Consultoria</p></a></div>
                    <div id='portfolio_card_02' className="portfolio_card"><a href='https://itsimoes.github.io/ns-advocacia' target='_blank'><p>NS Advocacia</p></a></div>
                    <div id='portfolio_card_03' className="portfolio_card"><a href='https://itsimoes.github.io/restaurante-01' target='_blank'><p>Restaurante</p></a></div>
                    <div id='portfolio_card_04' className="portfolio_card"><a href='https://itsimoes.github.io/clinica-veterinaria' target='_blank'><p>Clínica Veterinária</p></a></div>
                    <div id='portfolio_card_05' className="portfolio_card"><a href='https://itsimoes.github.io/trekking-01' target='_blank'><p>Trekking</p></a></div>
                    <div className="portfolio_card"></div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio