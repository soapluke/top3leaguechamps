import React from 'react';
import Champion from './Champion';

const Champions = (props) => {

    return (
        <div>
            {props.champs.map((champ, i) => {
                return <Champion key={i} champ={champ.championId} />
            })}
        </div>
    );
}

export default Champions;