<script setup>
// import { ref } from 'vue';
// import MySearch from './components/MySearch.vue';
// import MyCountries from './components/MyCountries.vue';
import MyCounter from './components/MyCounter.vue';

// const searchTerm = ref('');

// const receiveSearchTerm = (newValue) => {
//   searchTerm.value = newValue;
//   console.log('New search term:', newValue);
// };
</script>

<template>
  <div id="app">
    <MyCounter />
    <!-- <MySearch v-model="searchTerm" v-on:updateSearchTerm="receiveSearchTerm" />
    <MyCountries :searchTerm="searchTerm"/> -->
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  text-align: center;
  font-size: 1.5rem;
}
</style>
