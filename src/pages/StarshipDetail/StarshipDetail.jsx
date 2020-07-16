import React from 'react';
import { Link } from 'react-router-dom';
import './StarshipDetail.css';
import { getPilots } from '../../services/sw-api';


// Get it to call but I can't get past this point
function StarshipDetail(props) {
    const pilots = props.location.state.ship.pilots;
    const pilotInfo = getPilots(pilots);
    console.log(pilotInfo);
    
    return (
        <div className="flex-container">
            <div className='ship'>
                <p>NAME: {props.location.state.ship.name}</p>
                <p>MODEL: {props.location.state.ship.model}</p>
                <p>{(props.location.state.ship.pilots.length > 0 ? `Pilots found!` : `No pilots`)}</p>
                <Link to="/">RETURN</Link>
            </div>
        </div>
    );
}

export default StarshipDetail;