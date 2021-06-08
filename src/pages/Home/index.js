import React from 'react';
import './styles.css';
import wie from '../../assets/wie.png';
import meninasnacomputacao from '../../assets/meninasnacomputacao.png';
import minerva from '../../assets/minerva.png';
import calendario from '../../assets/calendario.png';
import online from '../../assets/online.png';
import Talk from '../../components/Talk';
import Speaker from '../../components/Speaker';
import talks from './talks.json';
import speakers from './speakers.json';

export default function Home(){
    return(
        <div className="home-container">
            <div className="hero-container">
                <div className="hero-content">
                    <h1>M.A.N.A.S</h1>
                    <h3>Mulheres amapaenses nas áreas de STEAM</h3>
                    <a href="#talks" alt="Ver programação">Ver programação completa</a>
                    <div className="info-content">
                        <h3><img src={calendario} alt="Calendário" />21 a 25 de junho</h3>
                        <h3><img src={online} alt="Online" /> Online e gratuito</h3>
                    </div>
                </div>
            </div>
            <div id="talks" className="talks-container">
                <h1 className="title-container">Cronograma</h1>
                <div className="talks-list">
                    {talks.map(talk => (
                        <Talk 
                        title={talk.title}
                        date={talk.date}
                        time={talk.time}
                        link={talk.link}
                    />
                    ))}
                </div>
            </div>
            <div className="about-container">
                <h1>Semana online e gratuita <strong>Para promover e incentivar mulheres nas exatas</strong></h1>
            </div>
            <div className="talks-container">
                <h1 className="title-container">Palestrantes</h1>
                <div className="speakers-list">
                    {speakers.map(speaker => (
                        <Speaker 
                        avatar={speaker.avatar}
                        name={speaker.name}
                        bio={speaker.bio}
                    />
                    ))}
                </div>
            </div>
            <div className="made-by-container">
                <img src={wie} alt="WIE Unifap" />
                <img src={meninasnacomputacao} alt="Meninas na Computação" />
                <img src={minerva} alt="Projeto Minerva" />
            </div>
        </div>
    )
}