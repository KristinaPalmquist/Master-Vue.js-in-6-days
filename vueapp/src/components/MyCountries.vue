<script setup>
import { inject, onMounted, ref, watch } from 'vue';

const searchTerm = inject(['searchTerm']);
const names = ref([]);
let countries = [];

onMounted(() => {
  var url = 'https://restcountries.com/v3.1/all';
  fetch(url)
    .then((res) => res.text())
    .then((data) => {
      countries = JSON.parse(data).map(function (elem) {
        return elem.name.common;
      });
      countries = countries.sort((n1, n2) => {
        if (n1 > n2) return 1;
        if (n1 < n2) return -1;
        return 0;
      });
      names.value = countries;
    })
    .catch((err) => (names.value = [err.toString()]));
});

watch(searchTerm, () => {
  let countriesFiltered = countries.filter((n) => {
    const reg = new RegExp('^' + searchTerm.value, 'i');
    if (n.match(reg)) return true;
    else return false;
  });
  names.value = countriesFiltered;
});
</script>

<template>
  <div id="myCountries">
    <div id="countries-list">
      <h1>Countries List</h1>
      <div v-show="!countries.length">Fetching countries in progress...</div>
      <p>Entered search term: {{ searchTerm }}</p>
      <ul id="result">
        <li v-for="n in names" :key="n">{{ n }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
#myCountries {
  background-color: papayawhip;
  padding: 3rem;
}
h1,
p {
  margin-left: 1rem;
}

#countries-list {
  width: 500px;
  text-align: left;
  margin: 0 auto;
}

#result {
  width: max-content;
}
</style>
