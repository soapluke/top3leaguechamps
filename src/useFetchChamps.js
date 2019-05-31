import { useState, useEffect } from "react";
import axios from 'axios';

const useFetchChamps = (url, championId) => {

  const [champ, setChamp] = useState(undefined);

  const aFetchChamps = async () => {
      const response = await axios.get(url);
      const data = await response.data.filter(c => c.key == championId);
      setChamp(data);
  }

  useEffect(() => {
    aFetchChamps();
  }, [championId]);

  return champ;
}

export default useFetchChamps;