import axios from 'axios';

export const fetch = async (searchQuery) => {
  try {
    const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
    const searchEndpoint = 'Search';
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
    const pageSize = '50';
    const pageNumber = '1';

    const options = {
      method: 'get',
      url: `${baseUrl}${searchEndpoint}`,
      params: {
        SearchQuery: searchQuery,
        PageSize: pageSize,
        PageNumber: pageNumber,
      },
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'jobsearch4.p.rapidapi.com',
      },
    };

    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
