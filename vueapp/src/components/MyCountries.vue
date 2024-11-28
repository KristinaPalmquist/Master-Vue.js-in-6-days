<!-- <script setup>
import useFetch from '@/composables/useFetch';
import { ref } from 'vue';

const data = ref();
const url = 'https://restcountries.com/v3.1/all';
const [startFetch] = useFetch(url);
const initData = async () => {
  data.value = await startFetch();
};
</script>

<template>
  <div id="myCountries">
    <h1>My Countries</h1>
    <button @click="initData">Start fetch</button>
    <br />
    <p>Data: {{ data }}</p>
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
</style> -->



<script setup>
import useFetch from "../composables/useFetch"
import { ref } from "vue";
const data = ref();
const url = "https://restcountries.com/v3.1/all";
const [startFetch] = useFetch(url);
const initData = async () => {
  data.value = await startFetch();
}
</script>
<template>
<button @click="initData">Start Fetch</button>
<br/><br/>
<b>Data</b> : {{data}}
</template>