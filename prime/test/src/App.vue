<template>
<div id="app">
  <router-link :to="{ name: 'Father', params: { userId: 123 }}">User</router-link>
  <router-link :to="{ name: 'Father2', params: { userId: 123 }}">Father2</router-link>
  <router-view/>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
