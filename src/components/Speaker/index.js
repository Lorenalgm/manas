import React from 'react';
import './styles.css'

export default function Speaker(props){
    return(
        <div className="speaker-container">
            <div className="date">
                <h1>{props.day}</h1>
                <h2>{props.month}</h2>
            </div>
            <h3 className="event-title">{props.title}</h3>
            <div className="event-time">
                <p className="hour">{props.hour}</p>
                <p className="speaker">{props.speaker}</p>
            </div>
        </div>
    )
}