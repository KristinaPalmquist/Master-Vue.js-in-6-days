<script setup>
// import useCounterMaxWithError from '../composables/useCounterMaxWithError';
import useWindowSize from '../composables/useWindowSize';
import useGeolocationWithDetails from '../composables/useGeolocationWithDetails';
// import useMap from '../composables/useMap';
// import { onMounted, watchEffect } from 'vue';

const windowSize = useWindowSize();
const [latitude, longitude, country, city] = useGeolocationWithDetails();

// onMounted(() => {
//   watchEffect(() => {
//     if (latitude.value && longitude.value) {
//       console.log('values received');
//       useMap(latitude.value, longitude.value, 'map');
//     }
//   });
// });
</script>

<template>
  <div id="myCounter">
    <h1>My Counter Component</h1>

    <hr />

    <p>
      Window width : {{ windowSize.width }}, Window height :
      {{ windowSize.height }}, Latitude: {{ latitude }}, Longitude:
      {{ longitude }}, Country: {{ country }}, City: {{ city }}
    </p>

    <hr />
    <p>
      Map around the city: <b v-show="city">{{ city }} - {{ country }}</b>
    </p>
    <div v-map="{ latitude: latitude, longitude: longitude }" id="map"></div>
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

h1 {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
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

#map {
  height: 400px;
  width: 100%;
  border: 1px solid #000;
  margin: 1rem 0;
}
</style>
