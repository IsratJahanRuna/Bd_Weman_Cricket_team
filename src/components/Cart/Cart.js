import React from 'react';
import Player from '../Team/Player/Player';

const cart = (props) => {
    const cart = props.cart;
    let total = 0;
    let playerDetails = [];
    for(let i=0; i<cart.length; i++){
        const player = cart[i];
        total = total + player.salary;
        let details = '('+'Name: '+player.name+', '+'Salary: '+player.salary+' taka'+')'+'.';
        playerDetails.push(details); 
    }
    return (
        <div>
            <h3>Team Summary</h3>
            <h4> Total Selected Players: {cart.length}</h4>
            <h3>Selected Players:</h3>
           <h4>{playerDetails}</h4>
            <h4>Total Budget: {total}</h4>
        </div >
    );
};

export default cart;