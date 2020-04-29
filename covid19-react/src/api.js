import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.thevirustracker.com/' //'https://api.tvmaze.com/search/shows?q='
});

export default api;