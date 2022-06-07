<template>
  <v-row>
    <v-btn
        elevation="4"
        @click="onOpenFormModal"
        color="primary"
    >Crear Producto</v-btn>
    <!--  Create modal  -->
    <v-dialog
        v-model="formModal.show"
        max-width="700px"
    @click:outside="clearModal">
      <v-card>
        <v-card-title> {{ formModal.title }}</v-card-title>
        <v-card-text>
          <v-form ref="productForm" v-model="formModal.isValid">
            <v-row>
    <!--    Name input     -->
              <v-col
              cols="6">
                <v-text-field
                v-model="currentProduct.nombre"
                label="Nombre"
                name="product-nombre"
                background-color="#F9F9F9"
                filled
                required/>
              </v-col>
    <!--      stock input        -->
              <v-col cols="3">
                <v-text-field
                    v-model.number="currentProduct.cantidad"
                    name="product-cantidad"
                    type="number"
                    min="1"
                    placeholder="0"
                    hint="Cantidad"
                    persistent-hint
                    filled
                    background-color="#F9F9F9"
                    required/>
              </v-col>
    <!--      Precio input        -->
              <v-col cols="3">
                <v-text-field
                    v-model.number="currentProduct.precio"
                    name="product-precio"
                    type="number"
                    min="0"
                    placeholder="0"
                    suffix="$"
                    hint="Precio"
                    persistent-hint
                    filled
                    background-color="#F9F9F9"
                    required/>
              </v-col>
              <v-col cols="12">
                <v-textarea
                    v-model="currentProduct.descripcion"
                    name="product-descripcion"
                    filled
                    background-color="#F9F9F9"
                    label="Descripcion del producto"
                    required/>
              </v-col>
              <v-col cols="6">
                <v-file-input
                    v-model="currentProduct.imagen"
                    label="File input"
                    filled
                    prepend-icon="mdi-camera"
                ></v-file-input>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn
              text
              :disabled="formModal.loading"
              @click="clearModal">
            Cancelar
          </v-btn>
          <v-btn
              v-if="currentProduct"
              depressed
              color="primary"
              :loading="formModal.loading"
              @click="onFormModalSubmit">
            {{ currentProduct.id ? 'Editar' : 'Crear' }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>

export default {
  name: "formModal",
  data: () => ({
    formModal: {
      title: "",
      show: false
    },
    currentProduct: {}
  }),
  methods: {
    onOpenFormModal() {
      this.formModal.title = "Crear nuevo producto"
      this.formModal.show = true
    },
    clearModal() {
      this.formModal.title = ""
      this.currentProduct = {}
      this.formModal.show = false
    },
    async onFormModalSubmit() {
      await this.$emit('createProduct', this.currentProduct)
      this.clearModal()
    }
  }
}
</script>

<style scoped>

</style>