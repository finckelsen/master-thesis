<template>
    <div className="App">
      <AppNavbar/>
      <router-view></router-view>
      <AppFooter/>
    </div>
</template>

<script>
import './assets/styles.css'
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter
  }
}
</script>