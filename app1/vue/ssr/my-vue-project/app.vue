<template>
  <div class="App">
    <AppNavbar />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<script>
import './assets/styles.css'; // Ensure the path is correct
import AppNavbar from './components/AppNavbar.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter,
  },
};
</script>
