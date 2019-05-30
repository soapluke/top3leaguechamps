import React, { useEffect } from 'react';
import axios from 'axios';

const Champions = (props) => {

    useEffect(() => {
        axios.get('./champs.json');
    }, []);

    return (
        <div>
            {props.champs.map((champ, i) => {
                return <p key={i}>{champ.championId}</p>
            })}
        </div>
    );
}

export default Champions;