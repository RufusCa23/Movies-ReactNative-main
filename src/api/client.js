import axios from 'axios';

const client = axios.create({
  baseURL: "http://192.168.97.191:3000",
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
});

export default client;