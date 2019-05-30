import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Champion = (props) => {

    const [champ, setChamp] = useState({})

    const getChamps = async () => {
        const response = await axios.get('./champs.json');
        const data = await response.data;
        const cha = await data.filter(c => c.key == props.champ)
        await setChamp(cha);
        console.log(cha);
    }

    useEffect(() => {
        getChamps();
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default Champion;