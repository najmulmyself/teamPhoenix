import React,{useState} from 'react';
import './Player.css'
const Player = (props) => {
    const {name,email,age,image,salary} = props.player;
    console.log(props.playerAdded)
    const {playerAdded} = props.playerAdded;

    

    return (
        <div className="players">
            <div className="eachPlayer">
                <img className='imgStyle' src={image} alt=""/>
                <h3>{name}</h3>
                <p>Age : {age}</p>
                <p>Salary : {salary}</p>
                <button onClick={playerAdded} className='btn'>Add To Team</button>
            </div>
        </div>
    );
};

export default Player;