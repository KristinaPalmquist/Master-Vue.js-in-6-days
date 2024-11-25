const treatment = (el, binding) => {
  const maxValue = binding.value || 100;
  const value = el.value || 0;
  const bold = binding.modifiers.bold;
  if (value > maxValue) {
    el.style.color = 'red';
    if (bold) {
      el.style.fontWeight = 'bold';
      el.style.fontFamily = 'Times New Roman';
    }
  } else {
    el.style.color = '';
    el.style.fontWeight = '';
    el.style.fontFamily = '';
  }
};
const maxValue = {
  mounted(el, binding) {
    treatment(el, binding);
  },
  updated(el, binding) {
    treatment(el, binding);
  },
};

export default maxValue;
