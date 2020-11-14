import axios from 'axios'
import router from '../../router/index'


const state = {
  user: null,
  product: null,
  authId: null
}

const getters = {
  isAuthenticated: (state) => !!state.user,
  StateProduct: (state) => state.product,
  StateUser: (state) => state.user,
  StateAuthId: (state) => state.authId
}

const actions = {
  async LogIn ({ commit }, user) {
    axios.post('users/login', user)
    .then(resp=>{
      if(resp.data.token){
        commit('setUser', user.email)
        commit('setAuthId',resp.data.token)
        window.location.href = '/';        
      }
    })
    .catch(err=>{
      console.log(err)
    })
  },

  async CreatePost ({ dispatch }, post) {
    await axios.post('post', post)
  },

  async GetProduct ({ commit },token) {
    let config = {headers: {'token':token}}
    const response = await axios.get('products',config,config)
    commit('setProduct', response.data)
  },

  async DeleteProduct ({ commit },product) {
    let config = {headers: {'token':product.token}}
    await axios.delete(`products/${product.id}`,config,config)
  },

  async AddProduct ({ commit },product) {
    let config = {headers: {'token':product.token}}
    await axios.post(`products`,product,config)
  },

  async EditProduct ({ commit },product) {    
    let config = {headers: {'token':product.token}}
    await axios.put(`products/${product.id}`,product,config)
  },

  async LogOut ({ commit }) {
    const email = null
    commit('logout', email)
  }
}

const mutations = {
  setAuthId (state, authId){
    state.authId = authId
  },

  setUser (state, email) {
    state.user = email
  },

  setProduct (state, product) {
    state.product = product.data
  },

  logout (state, email) {
    state.user = email
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
