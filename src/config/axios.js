import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-server1.herokuapp.com'

})

export default instance
