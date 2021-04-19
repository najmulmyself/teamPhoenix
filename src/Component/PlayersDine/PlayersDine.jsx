import React,{useState} from 'react';
import Player from '../Player/Player';
import './PlayersDine.css';
import fakeData from '../../Data/FakeData.json'
import PlayerCart from '../PlayerCart/PlayerCart';

const PlayersDine = () => {
    let data= fakeData.map(player => {let data = player})
    const [player, setPlayer] = useState(0);
    const playerAdded = () => {
        console.log('player added');
    }
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>Total Player = {data.length}</h2>
            <div className='body-section'>
                <div className='players-body'>
                    {fakeData.map(player => <Player playerAdded={() => playerAdded()} player={player}></Player>)}
                </div>
                <div className='cart'>
                    <PlayerCart></PlayerCart>
                </div>
            </div>
        </div>
    );
};

export default PlayersDine;