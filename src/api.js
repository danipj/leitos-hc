import qs from 'qs';
import axios from 'axios';

const api = axios.create({baseURL: 'http://hc.felipevr.com/'});

const tokenConfig = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

export function login(body){
  return api.post('token', qs.stringify(body), tokenConfig);
}
