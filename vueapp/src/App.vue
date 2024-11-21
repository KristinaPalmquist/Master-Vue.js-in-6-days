<script setup>
import MyCounters from './components/MyCounters.vue';
import { provide, ref } from 'vue';
const total = ref(0);
provide('total', total);
</script>

<template>
  <div id="app">
    <MyCounters :nb="3" />

    <p>
      Overall Total: <b>{{ total }}</b>
    </p>
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
</style>
