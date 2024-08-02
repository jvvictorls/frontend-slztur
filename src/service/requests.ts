import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3001`,
});

export const getSpots = async () => {
  const response = await api.get('/spots');
  return response.data;
};

export const getSpotById = async (id: string) => {
  const response = await api.get(`/spots/${id}`);
  return response.data;
};

export default api;
