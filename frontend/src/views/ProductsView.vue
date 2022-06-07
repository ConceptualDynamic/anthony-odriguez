<template>
  <v-container>
<!--  Create Modal  -->
    <form-modal @createProduct="createProduct"/>
  </v-container>
</template>

<script>

import formModal from "@/components/modals/productFormModal";
import axios from "axios";

export default {
  name: 'HomeView',
  components: {
    formModal
  },
  data: () => ({
  }),
  methods: {
    async createProduct(product) {
      await axios.post("http://localhost:8080/products", product)
      .then(() => {
        this.$toast.success("Producto creado con exito")
      })
      .catch(() => this.$toast.error("Error al crear el producto"))
    }
  }
}
</script>
