'use strict'

import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://dave-ecommerce-apps.herokuapp.com/'
})

export default instance
