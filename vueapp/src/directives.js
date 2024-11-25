import clearable from './directives/clearable';
import focus from './directives/focus';
import integersOnly from './directives/integers-only';
import maxValue from './directives/max-value';
import timer from './directives/timer';

export default {
  focus,
  integersOnly,
  maxValue,
  clearable,
  timer,
};

// const focusDirective = {
//   mounted(el) {
//     el.focus();
//   },
// };

// export default {
//   focus: focusDirective,
// };
