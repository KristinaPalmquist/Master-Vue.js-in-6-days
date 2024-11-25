const timer = {
  mounted(el, binding) {
    const ms = binding.modifiers.ms;
    const chrono = binding.modifiers.chrono;
    if (!chrono) {
      const time = getCurrentTime(ms);
      el.innerHTML = time;
    } else {
      if (!ms) {
        el.innerHTML = '00:00:00';
      } else {
        el.innerHtml = '00:00:00.0';
      }
    }
    setInterval(() => {
      if (!chrono) {
        let time = getCurrentTime(ms);
        el.innerHTML = time;
      } else {
        const chronoTime = getChronoTime(ms);
        el.innerHTML = chronoTime;
      }
    }, 100);
  },
};
function getCurrentTime(ms = false) {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  let formattedTime = `${hours}:${minutes}:${seconds}`;
  if (ms) {
    const milliSeconds = now.getMilliseconds().toString().slice(0, 1);
    formattedTime += `.${milliSeconds}`;
  }
  return formattedTime;
}
let startChronoTime = new Date();
function getChronoTime(ms = false) {
  const now = new Date();
  const elapsedMilliSeconds = now.getTime() - startChronoTime.getTime();
  const hours = Math.floor(elapsedMilliSeconds / (3600 * 1000));
  const remainingMilliSeconds1 = elapsedMilliSeconds % (3600 * 1000);
  const minutes = Math.floor(remainingMilliSeconds1 / (60 * 1000));
  const remainingMilliSeconds2 = remainingMilliSeconds1 % (60 * 1000);
  const seconds = Math.floor(remainingMilliSeconds2 / 1000);
  let formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  if (ms) {
    const milliSeconds = Math.floor(remainingMilliSeconds2 % 1000);
    const tenthOfSecond = Math.floor((milliSeconds % 1000) / 100);
    formattedTime += `.${tenthOfSecond.toString()}`;
  }
  return formattedTime;
}
export default timer;
