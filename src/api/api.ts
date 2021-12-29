import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/albums/";
const MAX_ELEMENTS = 10;

export const getAlbums = async () => {
  const response = await axios.get(URL);
  return response.data.slice(0, MAX_ELEMENTS);
};

export const getPhotos = async (albumId: number) => {
  const response = await axios.get(`${URL}${albumId}/photos`);
  return response.data.slice(0, MAX_ELEMENTS);
};
