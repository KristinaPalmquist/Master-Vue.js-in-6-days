<script setup>
import {  provide, ref } from 'vue';
import MyCountries from './components/MyCountries.vue';

const searchTerm = ref('');

</script>

<template>
  <div id="app">
    <form action="" id="countrySearch">
      <label for="name">Search: </label>
      <input
        type="text"
        v-model="searchTerm"
        placeholder="Enter Country Name"
      />
    </form>
    <MyCountries :searchTerm="searchTerm" />
  </div>
</template>

<script></script>

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

#countrySearch {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #eee;
}
#app #countrySearch label,
#app #countrySearch input {
  font-size: 2rem;
  margin: 1rem 1.5rem;
}

#app #countrySearch input {
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  border: solid 1px #ccc;
}

#app #countrySearch input::placeholder {
  color: #bbb;
}
</style>
