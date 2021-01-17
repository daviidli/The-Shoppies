import axios from 'axios';

const fetchData = (searchTerm: string, pageNumber = 1) => axios.get(`https://www.omdbapi.com/?apikey=bb0c08f4&s=${searchTerm}&page=${pageNumber}`);

export default fetchData;
