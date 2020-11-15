import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-cms666.herokuapp.com'
})

export default instance
