import useCounter from './useCounter';

const useCounterMax = (init, max) => {
  const [count, increment, decrement] = useCounter(init);

  const incrementMax = () => {
    if (count.value < max) {
      increment();
    }
    return;
  };

  return [count, incrementMax, decrement];
};
export default useCounterMax;
