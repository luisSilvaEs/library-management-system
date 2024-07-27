import axios from 'axios';

const BASE_URL = 'https://openlibrary.org/search.json';

export const searchBooks = async (query) => {
  try {
    console.log("Searching", query);
    const response = await axios.get(`${BASE_URL}?q=${query}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};
