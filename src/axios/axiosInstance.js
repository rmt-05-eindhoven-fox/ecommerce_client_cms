import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-pog.herokuapp.com'
})

export default instance
