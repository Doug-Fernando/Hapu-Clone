import axios from 'axios';

const URL = 'https://api.jungledevs.com/api/v1/challenge-newsletter/';

export default async (data) => {
  try {
    const result = await axios.post(URL, data);
    return result;
  } catch (error) {
    console.log(error.response.data);
    return error;
  }
};
