<script setup>
import { ref, defineProps, defineEmits } from 'vue';
// import useMaximum from '../composables/useMaximum';
// import { defineProps } from 'vue';
// import useFormatDate from '@/composables/useFormatDate';
// import useUpperCase from '@/composables/useUpperCase';

// const props = defineProps(['count', 'doubleCount']);
const props = defineProps(['index']);
const index = props.index || 1;
// const timer = ref(null);
// const props = defineProps(['limits']);
// const init = props.limit.init || 0;
// const end = props.limit.end || undefined;
// const count = ref(init);
const count = ref(0);
// const message = ref('');
// const doubleCount = computed(() => count.value * 2);
// const verifyKey = () => {
//   const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//   const moves = [
//     'Backspace',
//     'ArrowLeft',
//     'ArrowRight',
//     'Delete',
//     'Tab',
//     'Home',
//     'End',
//   ];
//   let authorized;
//   authorized = [...numbers, ...moves];
//   if (!authorized.includes(event.key)) {
//     event.preventDefault();
//   }
// };
// const verifyMax100 = () => {
//   message.value = '';
//   if (parseInt(event.target.value) > 100) {
//     message.value = 'Do not exceed 100!';
//   }
// };

// const eraseField = () => {
//   event.target.value = '';
//   count.value = '';
//   message.value = '';
// };

// function increment() {
//   count.value++;
// }
// if (number) {
//   count.value += number;
// } else {
//   count.value++;
// }
// if (end == undefined || count.value < end) {
//   count.value++;
// } else {
//   stop();
// }
// }
// const start = () => {
//   timer.value = setInterval(() => {
//     increment();
//   }, 1000);
// };
// const stop = () => {
//   clearInterval(timer.value);
//   timer.value = null;
// };
// onMounted(() => {
//   start();
// });
// onUnmounted(() => {
//   stop();
// });
// console.log('setup : count = ', props.count);
// onUpdated(() => {
//   console.log('updated : count = ', props.count);
// });

// function decrement() {
//   count.value--;
// }

// const date = new Date();
// const dateMMDDYYYY = useFormatDate(date, 'MM-DD-YYYY');
// const dateDDMMYYYY = useFormatDate(date, 'DD-MM-YYYY');
// const dateMMDDYYYY_slash = useFormatDate(date, 'MM/DD/YYYY');
// const dateDDMMYYYY_slash = useFormatDate(date, 'DD/MM/YYYY');

// const name = useUpperCase('eric');
const emit = defineEmits(['incr'])
const increment= () =>{
  count.value++;
  emit('incr', 1)
}
</script>

<template>
  <div id="myCounter">
    <!-- <h1>{{ index }} - My Counter Component</h1> -->
    <h1>My Counter Component - #{{ index }}</h1>
    <!-- <p>init : {{ init }}, end : {{ end ? end : 'infinity' }}</p>-->
    <p>
      Reactive variable count: <b> {{ count }}</b>
    </p>
    <!-- <p>
      Computed variable doubleCount: <b>{{ doubleCount }}</b>
    </p> -->
    <!-- <label>Input for count (v-bind):</label>
    <input type="text" :value="count" @click="count = 0" />
    <br /> -->
    <label>Input for count (v-model):</label>
    <input
      type="text"
      v-model="count"
    />
    <!-- <input
      type="text"
      v-model="count"
      @keydown="verifyKey()"
      @input="verifyMax100"
      @focus="eraseField()"
    /> -->
    <!-- <p>
      Entered value: <b>{{ count }}</b>
    </p>
    <p>
      Message: <b>{{ message }}</b>
    </p> -->

    <!-- <button @click="start()" v-if="!timer" style="background-color: green">
      Start
    </button>
    <button @click="stop()" v-else style="background-color: red">Stop</button> -->

    <button @click="increment()">Increment Counter</button>
    <!-- <button @click="decrement()">Decrement Counter</button> -->

    <!-- <button @click="start" v-show="!timer" style="background-color: green">
      Start
    </button>
    <button @click="stop" v-show="timer" style="background-color: red">
      Stop
    </button> -->
    <hr />
    <!-- 
    <h2>Current Date: {{ date }}</h2>
    <p>
      Date (MM-DD-YYYY) : <b>{{ dateMMDDYYYY }}</b>
    </p>
    <p>
      Date (DD-MM-YYYY) : <b>{{ dateDDMMYYYY }}</b>
    </p>
    <p>
      Date (MM/DD/YYYY) : <b>{{ dateMMDDYYYY_slash }}</b>
    </p>
    <p>
      Date (DD/MM/YYYY) : <b>{{ dateDDMMYYYY_slash }}</b>
    </p>
  </div>
  <hr />
  <b>Uppercase Input:</b>

  Variable Name: <input type="text" v-model="name" /> Variable Name: {{ name }}
  <hr /> -->
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
#myCounter {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 180px; */
}

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
