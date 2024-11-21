<script setup>
import { ref } from 'vue';
const name = ref('');

let dates = [];
for (let year = 2024; year > 1900; year--) {
  dates.push(year);
}
const yearOfBirth = ref('');

const maritalStatus = ref('');
const acceptConditions = ref([]);
</script>

<template>
  <h1>Input Form</h1>
  <form action="">
    <label for="name">Name</label>
    <input type="text" name="name" v-model.lazy="name" />
    <br />

    <label for="yearOfBirth">Year Of Birth</label>
    <select name="yearOfBirth" id="yearOfBirth" v-model="yearOfBirth">
      <option v-for="date in dates" :value="date" :key="date">
        {{ date }}
      </option>
    </select>
    <br />

    <h3>Marital Status</h3>
    <input type="radio" value="M" id="married" v-model="maritalStatus" />
    <label for="married">Married</label>

    <input type="radio" value="S" id="single" v-model="maritalStatus" />
    <label for="single">Single</label>

    <input type="radio" value="D" id="divorced" v-model="maritalStatus" />
    <label for="divorced">Divorced</label>

    <input type="radio" value="W" id="widower" v-model="maritalStatus" />
    <label for="widower">Widowed</label>

    <h3>Accept Conditions</h3>
    <input type="checkbox" id="read" value="read" v-model="acceptConditions" />
    <label for="read">I have read the terms of use</label><br />
    <input type="checkbox" id="accept" value="accept" v-model="acceptConditions" />
    <label for="accept"
      >I accept the general terms and conditions of Sale</label
    >
  </form>
  <h1>Reactive Variables</h1>
  <p>
    Name: <b>{{ name }}</b>
  </p>
  <p>
    Birth Date: <b>{{ yearOfBirth }}</b>
  </p>
  <p>
    Marital Status: <b>{{ maritalStatus }}</b>
  </p>
  <p>
    Accept Conditions: <b>{{ acceptConditions }}</b>
  </p>
</template>

<style scoped>
* {
  line-height: 2;
}

input[type='text'],
select {
  font-size: 1.25rem;
  width: 10rem;
  margin: 6px 5vw;
}
input {
  padding: 0 0.5rem;
}
select {
  padding: 0.5rem;
}
input[type='radio'],
input[type='checkbox'] {
  margin: 6px 16px;
}
</style>
