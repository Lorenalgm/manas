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
                    <h3 className="subtitle">Mulheres amapaenses nas áreas de STEAM</h3>
                    <a className="button-talks" href="#talks" alt="Ver programação">Ver programação completa</a>
                    <div className="info-content">
                        <h3><img src={calendario} alt="Calendário" />21 a 25<br></br> de junho</h3>
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
                <h1>Semana online e gratuita<br></br><strong>Para promover e incentivar mulheres nas exatas</strong></h1>
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
                <h1 className="title-container">Realização</h1>
                <div className="made-by-list">
                    <a href="https://www.instagram.com/wieunifap/" alt="WIE Unifap" target="_blank"><img src={wie} alt="WIE Unifap" /></a>
                    <a href="https://www.instagram.com/meninasnacomputacao/" alt="Meninas na Computação" target="_blank"><img src={meninasnacomputacao} alt="Meninas na Computação" /></a>
                    <a href="https://www.instagram.com/minervaprojeto/" alt="Projeto Minerva" target="_blank"><img src={minerva} alt="Projeto Minerva" /></a>
                </div>
            </div>
        </div>
    )
}