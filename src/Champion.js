import React from 'react';
import useFetchChamps from './useFetchChamps';
import champMasteries from './champMasteries';

const textStyle = {
    color: 'white'
}

const championStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '25%'
}
    
const masteryImg = (champLevel) => {
    return champMasteries[champLevel - 1];
}


const Champion = (props) => {

    const champ = useFetchChamps('./champs.json', props.championId);

    const mImg = masteryImg(props.championMastery)

    return (
        <div style={championStyle}>
            {champ === undefined ? (
                <p style={textStyle}>Loading...</p>
            ) : (
                <div>
                    <p style={textStyle}>{champ[0].name + ', ' + champ[0].title}</p>
                    <img src={mImg} alt="masteryLvl"/>
                    <img src={champ[0].icon} alt="champion"/>
                    <p style={textStyle}>{champ[0].tags.join(', ')}</p>
                    <p style={textStyle}>{champ[0].description.split('.')[0] + '.'}</p>

                    <p style={textStyle}>Mastery level: {props.championMastery}</p>
                    <p style={textStyle}>Mastery points: {props.championPoints}</p>
                </div>
            )}
        </div>
    );
}

export default Champion;