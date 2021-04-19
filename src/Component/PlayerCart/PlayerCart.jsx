import React,{useState} from 'react';

const PlayerCart = (props) => {
    console.log(props)
    const player = props.player;
    const name = props.name;
    const cost = props.cost;

    return (
        <div>
            <h4>Player Cart</h4>
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