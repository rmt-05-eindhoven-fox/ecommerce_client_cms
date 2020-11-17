import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://limitless-falls-19883.herokuapp.com/'
})
export default instance
