<script setup>
import { onMounted, provide, ref } from 'vue';
import MyCountries from './components/MyCountries.vue';

const searchTerm = ref('');
provide('searchTerm', searchTerm);

onMounted(() => document.querySelector('input[type=text]').focus());
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
    <MyCountries />
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
  transition: 0.5s;
  /* outline: none; */
  /* outline-offset: 4px; */
}

#app #countrySearch input::placeholder {
  color: #bbb;
}

#app #countrySearch input:focus {
  border: solid 3px hotpink;
  outline: solid 6px rgb(249, 160, 204);
}
</style>
