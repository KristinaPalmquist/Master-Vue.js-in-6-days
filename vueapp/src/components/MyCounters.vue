<script setup>
import MyCounter from './MyCounter.vue';
import { defineProps } from 'vue';
const props = defineProps(['nb']);
// defineProps(['limits'])
const nb = props.nb || 1;
const total = ref(0);
const increment = (value) => {
  total.value += value;
};
</script>
<template>
  <MyCounter v-for="i in nb" :key="i" :index="i" @incr="increment" />
  <p>
    Overall Total: <b>{{ total }}</b>
  </p>
  <!-- 
  <MyCounter v-for="(limit, i) in limits"
  :key="i" :index="i" :limit="limit"
  /> -->
</template>
