import axios from 'axios'

const instance = axios.create({

  baseURL: 'https://ecomercee-cms-risyad.herokuapp.com/'

})

export default instance
