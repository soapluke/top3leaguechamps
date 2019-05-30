import React, { useState } from 'react';
import Champions from './Champions';
import { cors, key } from './config';
import axios from 'axios';

const searchbarContainer = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
}

const searchbar = {
    marginRight: '1rem',
    marginTop: '2rem',
    borderRadius: '0.15rem',
}

const Search = () => {

    const [champs, setChamps] = useState(undefined);
    const [summonerQuery, setSummonerQuery] = useState('');
    const [server, setServer] = useState('');

    const onSearch = async () => {
        const summoner = await axios.get(`${cors}https://${server}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerQuery}?api_key=${key}`)
        const id = await summoner.data.id;
        const champs = await axios.get(`${cors}https://${server}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}?api_key=${key}`)
        const data = await champs.data;
        setChamps(data.splice(0, 3))
    }

    





    return (
        <div>
            <div style={searchbarContainer}>
                <select style={searchbar} onChange={e => setServer(e.target.value)}>
                    <option value="na1">NA</option>
                    <option value="euw1">EUW</option>
                    <option value="eune1">EUNE</option>
                    <option value="kr">KR</option>
                </select>
                <input placeholder="Search for summoner..." style={searchbar} value={summonerQuery} onChange={e => setSummonerQuery(e.target.value)} />
                <button style={searchbar} onClick={onSearch}>
                    Search
                </button>
                
            </div>
        {champs && <Champions champs={champs}/>}
        </div>
    );
}

export default Search;