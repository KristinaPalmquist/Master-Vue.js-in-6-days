<script setup>
// import { ref } from 'vue';

// const count = ref(null);
// const count = ref('201');
// const color = 'darkBlue';
// const bgColor = '#ddd';
// const colors = { color, bgColor };
// const max = 200;
// const props = defineProps(['index']);
// const index = props.index || 1;

// const increment = () => {
//   count.value++;
// };

// const decrement = () => {
//   count.value--;
// };
</script>

<template>
  <div id="myCounter">
    <!-- <h1>My Counter Component - #{{ index }}</h1> -->
    <h1>My Counter Component</h1>

    <!-- <p>
      Reactive variable count: <b> {{ count }}</b>
    </p> -->
    <!-- <div id="counterDiv">
      <button @click="decrement()">-</button>

      <input type="text" v-model="count" v-integers-only v-clearable v-focus />

      <button @click="increment()">+</button>
    </div> -->

    <!-- <p>{{ integer }}</p> -->
    <!-- <p>Max value: {{ max }}</p> -->
    <!-- <p>Entered value: {{ count }}</p> -->

    <hr />

    <div class="clock">
      <p>Time</p><span v-timer></span>
    </div>
    <div class="clock">
      <p>Time MS</p><span v-timer.ms></span>
    </div>

    <div class="clock">
      <p>Time elapsed</p><span v-timer.chrono></span>
    </div>
    <div class="clock">
      <p>Time elapsed MS</p><span v-timer.chrono.ms></span>
    </div>
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
#myCounter #counterDiv {
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
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

.clock {
  width: 800px;
  border: 1px solid #ccc;
  margin: 1rem auto;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
}

.clock p  {
  font-size: 2rem;
  font-family: 'Courier New', Courier, monospace;
  text-align: left;
}

.clock span {
  font-size: 5rem;
  font-family: 'Courier New', Courier, monospace;
  text-align: left;
}
</style>
