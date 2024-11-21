<script setup>
import { ref, defineProps, inject } from 'vue';

const count = ref(0);
const props = defineProps(['index']);
const index = props.index || 1;

const total = inject('total');

// const emit = defineEmits(['incr']);
const increment = () => {
  count.value++;
  // emit('incr', 1);
  total.value++
};

</script>

<template>
  <div id="myCounter">
    <h1>My Counter Component - #{{ index }}</h1>

    <p>
      Reactive variable count: <b> {{ count }} - {{ total }}</b>
    </p>

    <!-- <label>Input for count (v-model):</label>
    <input type="text" v-model="count" /> -->

    <button @click="increment()">Increment Counter</button>

    <hr />
  </div>
</template>

<script>
export default {
  name: 'MyCounter',
};
</script>

<style scoped>
* {
  line-height: 2;
  font-size: 1.2rem;
}
/* #myCounter {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */

h1 {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  /* font-size: 3rem; */
}

/* p {
  font-size: 2rem;
} */

button {
  background-color: olivedrab;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  padding: 0.5vh 1vw;
  margin: 0.5vh 0.5vw;
}

input {
  font-size: 1.25rem;
  text-align: center;
  width: 7rem;
  margin: 6px 5vw;
}
</style>
