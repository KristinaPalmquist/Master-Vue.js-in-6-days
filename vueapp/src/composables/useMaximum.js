import { customRef } from 'vue';

const useMaximum = (max) => {
  // Create a custom ref
  return customRef((track, trigger) => {
    // Value will be the variable being tracked, initialized here to 0
    let value = 0;
    return {
      get() {
        // Track the dependency when the value is read
        track();
        return value;
      },
      set(newValue) {
        // Update the value and trigger reactivity
        if (newValue <= max) {
          value = newValue;
          trigger();
        }
      },
    };
  });
};
export default useMaximum;
