<template>
  <v-row justify="center">
    <v-dialog
        v-model="modelValue"
        persistent
        max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5 pa-4 text-break">
          Seguro que desea eliminar este producto "{{ producto.nombre }}"?
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="red darken-1"
              text
              @click="onCancelDelete">
            cancelar
          </v-btn>
          <v-btn
              color="primary darken-1"
              text
              @click="onAcceptDelete"
          >
            Aceptar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "deleteDialog",
  props: {
    value: {
      type: Boolean,
      required: true
    },
    producto: {
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
    }
  },
  methods: {
    onCancelDelete() {
      this.$emit("onCancelDelete")
    },
    onAcceptDelete() {
      this.$emit("onAcceptDelete")
    }
  }
}
</script>