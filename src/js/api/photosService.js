import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.headers.common['Authorization'] =
  'Client-ID N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg';

async function getPhotos({ query, page = 1, perPage = 10 }) {
  const res = await axios.get('search/photos', {
    params: {
      query,
      page,
      per_page: perPage,
    },
  });

  return res.data;
}

export { getPhotos };
