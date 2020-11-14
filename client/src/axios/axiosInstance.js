import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://e-commerce-cms-amandajehan.herokuapp.com'
})

export default instance
