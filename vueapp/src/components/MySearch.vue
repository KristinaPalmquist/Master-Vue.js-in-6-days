<script setup>
import { defineProps, defineEmits, watch, onMounted, ref } from 'vue';

defineProps(['modelValue']);
const searchTerm = ref('');

const emit = defineEmits({
  updateSearchTerm: (newValue) => {
    if (newValue !== '') {
      return newValue;
    }
  },
});

watch(searchTerm, (newValue) => {
  emit('updateSearchTerm', newValue);
  console.log('new value: ', newValue);
});

// onMounted(() => document.querySelector('input[type=text]').focus());
</script>

<template>
  <form action="" id="countrySearch">
    <label for="name">Search: </label>
    <input
      type="text"
      v-model="searchTerm"
      placeholder="Enter Country Name"
      v-focus
    />
  </form>
</template>

<style>
#countrySearch {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #eee;
}
#countrySearch label,
#countrySearch input {
  font-size: 2rem;
  margin: 1rem 1.5rem;
}

#countrySearch input {
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  border: solid 1px #ccc;
  transition: 0.5s;
}

#countrySearch input::placeholder {
  color: #bbb;
}

#countrySearch input:focus {
  border: solid 3px hotpink;
  outline: solid 6px rgb(249, 160, 204);
}
</style>
