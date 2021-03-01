import React, { useState, useEffect} from 'react';
import fakeData from '../../fakeData/data.json';
import Player from './Player/Player';
import './Team.css';
import Cart from '../Cart/Cart.js';
const Team = () => {
    const [players, setPlayers] = useState(fakeData);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setPlayers(fakeData);
    }, [])

    const handelAddPlayer = (player) => {
        console.log('Product added', player);
        const newCart = [...cart, player];
        setCart(newCart);
    }

    return (
        <div className="team-container">
            <div className="player-container">
                {
                    players.map(player => <Player
                        handelAddPlayer={handelAddPlayer}
                        player={player}
                    ></Player>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Team;