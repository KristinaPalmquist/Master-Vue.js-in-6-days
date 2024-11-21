<script setup>
// import { computed, ref } from 'vue';
// import MyCounter from './components/MyCounter.vue';
// import MyForm from './components/MyForm.vue';
import MyCounters from './components/MyCounters.vue';

// const init = 10
// const end = 20
// const limits = {init, end}
// const count = ref(0);
// const doubleCount = computed(() => count.value * 2);
// const increment = () => {
//   count.value++;
// };
// const limits = [{ init: 0, end: 10 }, { init: 5 }, { end: 19 }];

</script>

<template>
  <!-- <MyCounter :limits = '{init:10, end:20}' /> -->
  <!-- <MyCounter :count="count" :doubleCount="doubleCount" />
  <br />
  <button @click="increment()">count+1</button> -->
  <MyCounters :nb="3" />
   <!-- <MyCounter /> -->
  <!-- <MyCounters :limits="limits" /> -->
   <!-- <MyForm /> -->
</template>

<script></script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
