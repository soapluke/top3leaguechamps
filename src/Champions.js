import React from 'react';
import Champion from './Champion';

const championsStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
}


const Champions = (props) => {
    return (
        <div style={championsStyle}>
            {props.champs.map((champ, i) => {
                return <Champion
                            key={i}
                            championId={champ.championId}
                            championMastery={champ.championLevel}
                            championPoints={champ.championPoints}
                        />
            })}
        </div>
    );
}

export default Champions;