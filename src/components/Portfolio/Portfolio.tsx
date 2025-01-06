import React from 'react'
import "./style.scss"

const Portfolio = () => {
    return (
        <div className="portfolio_wrapper">
            <div className="portfolio_container">
                <div className="portfolio_title">
                    <h2>Portfolio.</h2>
                    <div className="underbar"></div>
                    <h5>Projetos profissionais e pessoais.</h5>
                </div>
                <div className="portfolio_cards_container">
                    <div id='portfolio_card_01' className="portfolio_card">Barros Consultoria</div>
                    <div id='portfolio_card_02' className="portfolio_card">NS Advocacia</div>
                    <div id='portfolio_card_03' className="portfolio_card">Restaurante</div>
                    <div id='portfolio_card_04' className="portfolio_card">Clínica Veterinária</div>
                    <div id='portfolio_card_05' className="portfolio_card">Trekking</div>
                    <div className="portfolio_card"></div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio