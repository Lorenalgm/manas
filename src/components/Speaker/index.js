import React from 'react';
import './styles.css'

export default function Speaker(props){
    return(
        <div className="speaker-container">
            <img className="speaker-avatar" src={props.avatar} alt={props.name} />
            <h3 className="speaker-name">{props.name}</h3>
            <p className="speaker-bio">{props.bio}</p>
        </div>
    )
}