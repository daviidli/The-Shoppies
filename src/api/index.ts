import axios from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';

export const http = axios.create({
	adapter: cacheAdapterEnhancer(axios.defaults.adapter as any),
});

const fetchData = (searchTerm: string, pageNumber = 1) => http.get(`https://www.omdbapi.com/?apikey=bb0c08f4&s=${searchTerm}&page=${pageNumber}`);

export default fetchData;
