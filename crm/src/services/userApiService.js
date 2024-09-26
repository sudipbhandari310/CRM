import axios from 'axios';

const base_url = 'http://localhost:4000/api/v1';

//function for login Api

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${base_url}/login`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
