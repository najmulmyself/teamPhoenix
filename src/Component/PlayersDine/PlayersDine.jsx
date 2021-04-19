import React,{useState} from 'react';
import Player from '../Player/Player';
import './PlayersDine.css';
import fakeData from '../../Data/FakeData.json'
import PlayerCart from '../PlayerCart/PlayerCart';

const PlayersDine = () => {
    let data= fakeData.map(pr => {let data = pr})
    const [player, setPlayer] = useState([]);
    const [cost , setCost] = useState(0);
    const playerAdded = (eachPlayer) => {
        let newplayer = [...player, eachPlayer] ;
        setPlayer(newplayer);
        
        for (let i = 0; i < true; i++) {
            var totalCost = cost + eachPlayer.salary;
            setCost(totalCost)
        }

        
    }
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>Total Player = {data.length}</h2>
            <div className='body-section'>
                <div className='players-body'>
                    {fakeData.map(player => <Player playerAdded={playerAdded} player={player}></Player>)}
                </div>
                <div className='cart'>
                    <PlayerCart player={player.length} name={player} cost={cost}></PlayerCart>
                </div>
            </div>
        </div>
    );
};

export default PlayersDine;