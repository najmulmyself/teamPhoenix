import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'
const PlayerCart = (props) => {
    console.log(props)
    const player = props.player;
    const name = props.name;
    const cost = props.cost;

    return (
        <div>
            <h1>Player Cart </h1>
            <p>Selected player: {player}</p>
            <p>Your Team:
            {
                name.map(eachPlayer =><li>{eachPlayer.name} - ${eachPlayer.salary}</li>)
            }
            </p>
            <hr/>
            <small>Total Cost ${cost}</small>
        </div>
    );
};

export default PlayerCart;