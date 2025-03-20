import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const getPosts = async ({ page, perPage }) => {
  const axiosOptions = {
    params: {
      _limit: perPage,
      _page: page,
    },
  };

  return (await axios.get('posts', axiosOptions)).data;
};
