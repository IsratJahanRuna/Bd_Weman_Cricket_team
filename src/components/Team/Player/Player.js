import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './Player.css';

const Player = (props) => {
    const { image, name, salary } = props.player;
    return (
        <div className="player">
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h4 className="player-name">{name}</h4>
                <br />
                <p><small><b>Salary:</b> {salary}tk</small></p>
                <br/>
                <button 
                className="btn btn-danger" 
                onClick={() => props.handelAddPlayer(props.player)}
                ><FontAwesomeIcon icon={faUser} /> Add to Team</button>
            </div>

        </div>
    );
};

export default Player;