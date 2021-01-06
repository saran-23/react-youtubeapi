import axios from 'axios';
const KEY = 'AIzaSyCSHM4urG2htWfGHLk6N6Z_aKDDsFrpOTE';
// const KEY = 'AIzaSyA-DIOn6iy-azHeYwy5ljZeOabDeCBvfJQ';
export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        
    }
});


