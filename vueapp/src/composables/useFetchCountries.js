import useFetch from './useFetch';

const useFetchCountries = (url) => {
  const [startFetch] = useFetch(url);
  let countries;
  const startFetchCountries = async () => {
    const data = await startFetch();
    countries = data.map(function(elem) {
        return elem.name.common;
    })
    countries = countries.sort((n1, n2) => {
        if(n1 > n2) { return 1; }
        if(n1 < n2) { return -1; }
        return 0;
    });
    return countries;
  };
  return [startFetchCountries];
};

export default useFetchCountries;
