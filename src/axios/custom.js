import axios from 'axios';

const authFetch = axios.create({
    // baseURL: 'https://fakestoreapi.com',
    baseURL: 'https://fakestoreapi.in',
});

export default authFetch;
