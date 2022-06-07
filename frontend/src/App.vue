<template>
  <v-app>
    <nav>
      <router-link to="/productos">Productos</router-link> |
      <router-link to="/clientes">Clientes</router-link>
    </nav>
    <v-main>
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
