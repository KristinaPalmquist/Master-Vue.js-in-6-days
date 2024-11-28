import L from 'leaflet';

const useMap = (latitude, longitude, idMap) => {
  const zoom = 13;

  const map = L.map(idMap).setView([latitude, longitude], zoom);

  L.tileLayer("https://a.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 20,
  }).addTo(map)


  L.marker([latitude, longitude]).addTo(map)

  return map;
};

export default useMap;
