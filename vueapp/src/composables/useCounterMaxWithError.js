import useCounterMax from './useCounterMax';
import { onMounted, ref } from 'vue';

const useCounterMaxWithError = (init, max) => {
  const [count, increment, decrement] = useCounterMax(init, max);
  const error = ref('');

  const incrementMax = () => {
    if (count.value < max) {
      increment();
      error.value = '';
    } else {
      error.value = 'Maximum count reached';
      return error;
    }
  };
  const decrementMax = () => {
    decrement();
    if (count.value <= max) {
      error.value = '';
    }
  };

  onMounted(() => {
    if (count.value >= max) {
      error.value = 'maximum count reached';
    }
  });
  return [count, incrementMax, decrementMax, error];
};
export default useCounterMaxWithError;
