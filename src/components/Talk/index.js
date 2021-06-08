import React from 'react';
import './styles.css'

export default function Talk(props){
    return(
        <div className="talk-container">
            <div className="talk-content">
                <div className="date">
                    <p>{props.date}</p>
                </div>
                <h3 className="event-title">{props.title}</h3>
                <p className="time">{props.time}</p>
            </div>
            {props.link?
                <a className="link" href={props.link} alt="Participar">Clique para participar</a>
                :<p className="without-link">Link disponível em breve</p>
            }
            
        </div>
    )
}