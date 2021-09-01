<template>
  <div>
    <h1>Front End!</h1>

    <Pagination></Pagination>
  </div>
</template>

<script>
import Pagination from './components/Pagination.vue'

export default {
  name: 'App',
  components: {
    Pagination,

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
