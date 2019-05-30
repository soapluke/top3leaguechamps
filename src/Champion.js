import React, { useEffect } from 'react';
import axios from 'axios';

const Champion = (props) => {

    useEffect(() => {
        axios.get('./champs.json');
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default Champion;