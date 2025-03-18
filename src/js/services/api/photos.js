import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.headers.common['Authorization'] =
  'Client-ID N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg';

const ENDPOINT = 'search/photos';

//* fetch
// function getPhotos(query) {
//   return fetch(`${BASE_URL}/${ENDPOINT}?query=${query}`, {
//     headers: {
//       Authorization: `Client-ID ${API_KEY}`,
//     },
//   }).then(res => {
//     if (!res.ok) {
//       throw new Error(res.status);
//     }

//     return res.json();
//   });
// }

//* axios

async function getPhotos(query) {
  const { data } = await axios.get(ENDPOINT, {
    params: {
      query,
    },
  });

  return data;
}

// function getPhotos(query) {
//   return axios
//     .get(ENDPOINT, {
//       params: {
//         query,
//       },
//     })
//     .then(res => res.data);
// }

export { getPhotos };
