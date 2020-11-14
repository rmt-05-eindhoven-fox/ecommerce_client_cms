import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-cms-delvia.herokuapp.com'
})

export default instance
