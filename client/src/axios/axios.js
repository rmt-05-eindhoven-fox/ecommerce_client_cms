import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-adnan.herokuapp.com/'
})

export default instance
