import axios from 'axios';

export default {
  testAPI() {
    return axios.get('/api/stripe/customers')
  }
}