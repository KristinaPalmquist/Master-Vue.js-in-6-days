<script setup>
import useCounterMaxWithError from '../composables/useCounterMaxWithError';

const init = 10;
const max = 5;
const [count, increment, decrement, error] = useCounterMaxWithError(init, max);
</script>

<template>
  <div id="myCounter">
    <h1>My Counter Component</h1>

    <p>Reactive variable count:</p>
    <div id="counterDiv">
      <button @click="decrement()">-</button>

      <p>{{ count }}</p>

      <button @click="increment()">+</button>
    </div>

    <!-- <p>{{ integer }}</p> -->
    <p>Max value: {{ max }}</p>
    <!-- <p>Entered value: {{ count }}</p> -->
    <p class="error" v-show="error !== ''">Error message: {{ error }}</p>

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

#myCounter #counterDiv {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 750px;
  background-color: #eee;
  border: solid 1px #c4c4c4;
  border-radius: 10px;
  margin: 1rem auto;
  padding: 2rem;
}

button {
  /* background-color: ccc; */
  color: #000;
  border: none;
  border-radius: 50%;
  font-size: 5rem;
  line-height: 1;
  padding: 0.5vh 1vw;
  margin: 0.5vh 0.5vw;
  height: 90px;
  width: 90px;
}
button:hover {
  background-color: rgba(255, 182, 193, 0.2);
}

input {
  font-size: 3rem;
  text-align: center;
  width: 10rem;
  margin: 6px 5vw;
  border-radius: 8px;
}

#myCounter #counterDiv p {
  font-size: 5rem;
}

.error {
  color: red;
}
</style>
