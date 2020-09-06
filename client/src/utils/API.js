import axios from 'axios';

function createBearer() {
  const token = JSON.parse(localStorage.getItem('ofsp-token'));
  if (token) {
    return `Bearer ${token}`;
  }
  return 'Bearer thispersonismasqueradingasaloggedinuseryouknowwhattodo'
}

const baseURL = '/api'

export default {
  testAPI() {
    return axios.get(`${baseURL}/stripe/customers`)
  },
  checkAuth() {
    return axios.get(`${baseURL}/users/check`, { headers: { 'Authorization': createBearer() } })
  },
  loginUser(email, password) {
    return axios.post(`${baseURL}/users/login`, { email, password })
  }
}