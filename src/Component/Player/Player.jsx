import React,{useState} from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserPlus} from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const {name,email,age,image,salary} = props.player;
    const playerAdded = props.playerAdded;
    

    return (
        <div className="players">
            <div className="eachPlayer">
                <img className='imgStyle' src={image} alt=""/>
                <h3>{name}</h3>
                <p>Age : {age}</p>
                <p>Salary : {salary}</p>
                <button onClick={() => playerAdded(props.player)} className='btn'><FontAwesomeIcon icon={faUserPlus}/>  Add To Team</button>
            </div>
        </div>
    );
};

export default Player;