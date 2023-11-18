// api.js
import axios from 'axios';

const spacexApi = axios.create({
  baseURL: 'https://api.spacexdata.com/v4',
});

export const fetchRockets = async () => {
  try {
    const response = await spacexApi.get('/rockets');
    console.log(response,'response')
    return response.data;
  } catch (error) {
    console.error('Error fetching rockets:', error);
    throw error;
  }
};

export const fetchCapsules = async () => {
  try {
    const response = await spacexApi.get('/capsules');
    return response.data;
  } catch (error) {
    console.error('Error fetching capsules:', error);
    throw error;
  }
};
