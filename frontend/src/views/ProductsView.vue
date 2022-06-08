<template>
  <v-container>
    <v-btn
        elevation="4"
        @click="onOpenFormModal"
        color="primary"
    >Crear Producto</v-btn>
    <!--  Create Modal  -->
    <product-form-modal
        v-model="formModal.open"
        @createProduct="createProduct"
        @editProduct="editProduct"
        @cancelFormModal="onCancelForm"
        :title="formModal.title"
        :current-product="currentProduct"/>
    <!--  Views of products  -->
    <v-row>
      <v-col v-for="producto in productos" :key="producto.id">
        <product-card
            v-if="producto.id"
            :producto="producto"
            @onDelete="onDeleteProduct"
            @onEdit="onEditProduct" />
      </v-col>
    </v-row>
    <!--  Delete dialog  -->
    <delete-dialog
        v-if="currentProduct.id"
        :producto="currentProduct"
        v-model="deleteDialog.open"
        @onCancelDelete="onCancelDelete"
        @onAcceptDelete="deleteProduct"/>
  </v-container>
</template>

<script>

import productFormModal from "@/components/modals/productFormModal";
import axios from "axios";
import productCard from "@/components/cards/ProductCard";
import DeleteDialog from "@/components/modals/deleteDialog";

export default {
  name: 'HomeView',
  components: {
    DeleteDialog,
    productFormModal,
    productCard
  },
  data: () => ({
    deleteDialog: {
      open: false
    },
    formModal: {
      open: false,
      title: ""
    },
    currentProduct: {}
  }),
  prop: {
    deleteDialog: {
      type: Object
    }
  },
  computed: {
    productos() {
      return this.$store.getters.productos
    }
  },
  methods: {
    //Create product
    async createProduct(product) {
      await axios.post("http://localhost:8080/products", product)
      .then((response) => {
        const producto = response.data
        this.$toast.success("Producto creado con exito")
        this.$store.getters.productos.push(producto)
        this.$store.getters.productos.sort((a, b) => a.nombre < b.nombre ? -1 : a.nombre > b.nombre ? 1 : 0)
        this.currentProduct = {}
        this.formModal.open = false
        this.formModal.title = ""
      })
      .catch(() => this.$toast.error("Error al crear el producto"))
    },
    //Delete product
    async deleteProduct() {
      await axios.delete(`http://localhost:8080/products/${this.currentProduct.id}`)
      .then(() => {
        //Search product index and delete it from the array.
        const productIndex = this.$store.getters.productos.findIndex((product) =>
          product.id === this.currentProduct.id)
        if(productIndex !== -1){
          this.$store.getters.productos.splice(productIndex, 1)
        }
        this.$store.getters.productos.sort((a, b) => a.nombre < b.nombre ? -1 : a.nombre > b.nombre ? 1 : 0)
        this.currentProduct = {}
        this.$toast.success("Producto eliminado con exito")
      }).catch(() => this.$toast.error("Error al eliminar el producto"))
      this.deleteDialog.open = false
    },
    //Edit product
    async editProduct(product) {
      await axios.put(`http://localhost:8080/products/${this.currentProduct.id}`, product)
      .then((response) => {
        const product = this.$store.getters.productos.find(producto => producto.id === this.currentProduct.id)
        if(product){
          this.$store.getters.productos.push(response)
        }
        this.$store.getters.productos.sort((a, b) => a.nombre < b.nombre ? -1 : a.nombre > b.nombre ? 1 : 0)
        this.formModal.open = false
        this.currentProduct = {}
        this.$toast.success("Producto editado con exito")
      }).catch(() => this.$toast.error("Error al editar el producto"))
    },
    onOpenFormModal() {
      this.formModal.title = "Crear Producto"
      this.formModal.open = true
    },
    onDeleteProduct(product) {
      this.currentProduct = product
      this.deleteDialog.open = true
    },
    onEditProduct(product) {
      this.formModal.title = "Editar Producto"
      this.currentProduct = product
      this.formModal.open = true
    },
    onCancelForm() {
      this.formModal.title = ""
      this.currentProduct = {}
      this.formModal.open = false
    },
    onCancelDelete() {
      this.deleteDialog.open = false
      this.currentProduct = {}
    }
  },
  async created() {
    await this.$store.dispatch("getProducts");
  }
}
</script>
