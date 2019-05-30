import React, { useEffect } from 'react';
import axios from 'axios';
import Champion from './Champion';

const Champions = (props) => {

    useEffect(() => {
        axios.get('./champs.json');
    }, []);

    return (
        <div>
            {props.champs.map((champ, i) => {
                return <Champion key={i} champ={champ.championId} />
            })}
        </div>
    );
}

export default Champions;