<template>
  <v-card
      class="mx-auto my-12"
      max-width="350">
<!--  Muestra la imagen  -->
    <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>
<!--  Muestra el nombre del producto  -->
    <v-card-title>{{ producto.nombre }}</v-card-title>
<!--  Muestra la descripcion del producto  -->
    <v-card-text>
      <div>{{ producto.descripcion }}</div>
    </v-card-text>
<!--  Muestra la cantidad de productos  -->
    <v-row class="justify-space-between px-4 py-2" no-gutters>
      <v-card-text class="col-3 d-flex justify-center">Cantidad:
        <span class="font-weight-medium">{{ producto.cantidad }}</span>
      </v-card-text>
<!--   Muestra el precio del producto   -->
      <v-card-text class="col-3 d-flex justify-center">Precio: {{ producto.precio }}
        <span class="font-weight-medium">$</span>
      </v-card-text>
    </v-row>
    <v-divider class="mx-4"></v-divider>
    <v-card-actions class="d-flex">
      <v-btn
          color="deep-purple lighten-2"
          text
          @click="onEdit"
      >
        Editar
      </v-btn>
      <v-btn
          color="deep-purple lighten-2"
          text
          @click="onDelete"
      >
        Eliminar
      </v-btn>
      <v-card-text class="font-weight-medium text-center col-4 ml-auto">{{ status }}</v-card-text>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    producto: {
      type: Object
    }
  },
  computed: {
    //Cambia el status de tru and false to activo e inactivo
    status() {
      if (this.producto.status === true) {
        return "Activo"
      } return "Inactivo"
    }
  },
  methods: {
    onDelete() {
      this.$emit("onDelete", this.producto)
    },
    onEdit() {
      this.$emit("onEdit", this.producto)
    }
  }
}
</script>