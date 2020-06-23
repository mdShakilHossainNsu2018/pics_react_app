import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 6nfOmWYxOfhCczI1HVzVkn2nxosm_GMCdXhsj9q3e3Y'
    },
})
