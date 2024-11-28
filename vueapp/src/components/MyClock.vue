<script setup></script>

<template>
  <div class="clock">
    <!-- <p>Time</p> -->
    <span v-timer></span>
  </div>
  <!-- <div class="clock">
      <p>Time MS</p><span v-timer.ms></span>
    </div>

    <div class="clock">
      <p>Time elapsed</p><span v-timer.chrono></span>
    </div>
    <div class="clock">
      <p>Time elapsed MS</p><span v-timer.chrono.ms></span>
    </div> -->
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

.clock {
  width: 800px;
  border: 1px solid #ccc;
  margin: 1rem auto;
  border-radius: 10px;
  display: flex;
  /* justify-content: space-between; */
  justify-content: center;
}

.clock p {
  font-size: 2rem;
  font-family: 'Courier New', Courier, monospace;
  text-align: left;
}

.clock span {
  font-size: 5rem;
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  /* text-align: left; */
}
</style>
