import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-60be9.firebaseio.com/'
});

export default instance;