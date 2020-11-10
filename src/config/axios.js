import axios from 'axios';

const instance = axios({
  baseURL: 'http://localhost:3000',
  headers: {
    access_token: localStorage.access_token
  }
});

export default instance;