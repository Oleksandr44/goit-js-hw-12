import axios from 'axios';
import { searchImgs } from '../main.js';
import { addPage } from '../main.js';
import { perPage } from '../main.js';

export const fetchImg = async () => { 
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: "42983927-5e967019413ad4725ae859f5e",
      q: searchImgs,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: perPage,
      page: addPage,
    },
  });
  const result = response.data.hits;
  return result;
};