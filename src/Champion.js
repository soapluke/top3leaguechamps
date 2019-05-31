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

    switch(champLevel) {
        case 1:
            return champMasteries[0];
        case 2:
            return champMasteries[1];
        case 3:
            return champMasteries[2];
        case 4:
            return champMasteries[3];
        case 5:
            return champMasteries[4];
        case 6:
            return champMasteries[5];
        case 7:
            return champMasteries[6];
        default:
          return null;
      }
  }


const Champion = (props) => {

    const champ = useFetchChamps('./champs.json', props.championId);

    const mImg = masteryImg(props.championMastery)


    return (
        <div style={championStyle}>
            {champ === undefined ? (
                    <p style={textStyle}>Loading.</p>
                ) : (
                    <div>
                        <p style={textStyle}>{champ[0].name + ', ' + champ[0].title}</p>
                        <img src={mImg} alt="masteryLvl"/>
                        <img src={champ[0].icon} alt="champion"/>
                        <p style={textStyle}>{champ[0].tags.join(', ')}</p>
                        <p style={textStyle}>{champ[0].description.split('.')[0] + '.'}</p>

                    



                    </div>
                
                
                
                
            )}
        </div>
    );
}

export default Champion;