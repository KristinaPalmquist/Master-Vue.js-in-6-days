const focusDirective = {
  mounted(el, binding) {
    const arg = binding.arg;
    const value = binding.value;
    el.addEventListener('focus', () => {
      if (arg == 'color') {
        el.style.color = value;
      }
      if (arg == 'backgroundcolor') {
        el.style.backgroundColor = value;
      }
      if (arg == 'colors') {
        el.style.color = value.color;
        el.style.backgroundColor = value.bgColor;
      }
    });
    el.addEventListener('blur', () => {
      if (arg == 'color') {
        el.style.color = '';
      }
      if (arg == 'backgroundcolor') {
        el.style.backgroundColor = '';
      }
      if (arg == 'colors') {
        el.style.color = '';
        el.style.backgroundColor = '';
      }
    });

    el.focus();
  },
};

export default focusDirective;
