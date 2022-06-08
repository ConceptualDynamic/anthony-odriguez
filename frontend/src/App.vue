<template>
  <v-app>
      <nav class="d-flex justify-end pr-4 py-4" >
        <router-link to="/productos">Productos</router-link> |
        <router-link to="/clientes">Clientes</router-link>
      </nav>
    <v-main class="pa-8">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
