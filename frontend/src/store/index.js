import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productos: []
  },
  getters: {
    productos(state) {
      return state.productos
    }
  },
  mutations: {
    async setNewProducts(state, productos) {
      state.productos = await productos
    }
  },
  actions: {
   // Realiza la peticion para obtener los productos
   async getProducts({ commit }) {
     let productos = []
     await axios.get("http://localhost:8080/products")
       .then((response) => {
         productos = response.data
       })
       .catch(() => this._vm.$toast.error("Error al obtener los productos"))
     productos.sort((a, b) => a.nombre < b.nombre ? -1 : a.nombre > b.nombre ? 1 : 0)
     commit("setNewProducts", productos)
    }
  },
});