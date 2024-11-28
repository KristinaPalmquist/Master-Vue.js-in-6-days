// const useFetch = (url) => {
//   const startFetch = async () => {
//     const res = await fetch(url);
//     console.log('1. res :', res);
//     console.log('2 :', res.body.values());

//     const d = await res.text();
//     console.log('d :', d);
//     return JSON.parse(d);
//   };
//   return [startFetch];
// };

// export default useFetch;



const useFetch = (url) => {
    const startFetch = async () => {
      const res = await fetch(url);
      const d = await res.text();
      return JSON.parse(d);  // Returning the data read from the server in JSON format
    }
    return [startFetch];
  }
  export default useFetch;