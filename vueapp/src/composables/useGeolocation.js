import { onMounted, ref } from 'vue';

const useGeolocation = () => {
  const latitude = ref(null);
  const longitude = ref(null);
  const handleGeolocation = (position) => {
    latitude.value = position.coords.latitude;
    longitude.value = position.coords.longitude;
  };
  const errorGeolocation = (error) => {
    console.error('Geolocation Error: ', error.message);
  };
  onMounted(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        handleGeolocation,
        errorGeolocation
      );
    } else {
      console.error('Geolocation is not supported by this browser');
    }
  });
  return [latitude, longitude];
};
export default useGeolocation;
