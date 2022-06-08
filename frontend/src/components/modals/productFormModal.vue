<template>
  <v-row>
    <!--  Create modal  -->
    <v-dialog
        v-model="modelValue"
        max-width="700px"
    @click:outside="clearModal">
      <v-card>
<!--   Titulo del modal     -->
        <v-card-title class="pa-4 flex justify-center"> {{ modelTitle }}</v-card-title>
        <v-card-text>
          <v-form ref="productForm">
            <v-row>
    <!--    Name input     -->
              <v-col
              cols="6">
                <v-text-field
                v-model="modelProduct.nombre"
                label="Nombre"
                name="product-nombre"
                background-color="#F9F9F9"
                filled
                required/>
              </v-col>
    <!--      stock input        -->
              <v-col cols="3">
                <v-text-field
                    v-model.number="modelProduct.cantidad"
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
                    v-model.number="modelProduct.precio"
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
    <!--      Descripcion input        -->
              <v-col cols="12">
                <v-textarea
                    v-model="modelProduct.descripcion"
                    name="product-descripcion"
                    filled
                    background-color="#F9F9F9"
                    label="Descripcion del producto"
                    required/>
              </v-col>
<!--      Image input        -->
              <v-col cols="6">
                <v-file-input
                    v-model="modelProduct.imagen"
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
              @click="clearModal">
            Cancelar
          </v-btn>
          <v-btn
              v-if="modelProduct"
              depressed
              color="primary"
              @click="onFormModalSubmit">
            {{ modelProduct.id ? 'Editar' : 'Crear' }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>

export default {
  name: "formModal",
  props: {
    value: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    currentProduct: {
      type: Object
    }
  },
  computed: {
    modelValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('update', value)
      }
    },
    modelTitle: {
      get() {
        return this.title
      },
      set(title) {
        this.$emit('update', title)
      }
    },
    modelProduct: {
      get() {
        return this.currentProduct
      },
      set(currentProduct) {
        this.$emit('update', currentProduct)
      }
    }
  },
  methods: {
    async clearModal() {
      await this.$emit("cancelFormModal")
    },
    async onFormModalSubmit() {
      await this.currentProduct.id ? this.$emit('editProduct', this.currentProduct) : this.$emit('createProduct', this.currentProduct)
    }
  }
}
</script>

<style scoped>

</style>