import axios from 'axios';
export const fetchJob = async (dataurl) => {
  const options = {
    method: 'get',
    url: dataurl,
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'jobsearch4.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
