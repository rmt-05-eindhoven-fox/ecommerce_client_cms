import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000'
  // https://ecommerce-portofolio.herokuapp.com
})

export default instance
