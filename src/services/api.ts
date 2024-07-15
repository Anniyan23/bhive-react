// src/services/api.ts
import axios from 'axios';

const GITHUB_DATA_URL = 'https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/data.json';
const GITHUB_IMAGE_BASE_URL = 'https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/static_assets/';

export const fetchData = async () => {
  try {
    const response = await axios.get(GITHUB_DATA_URL);
    const data = response.data;

    // Assuming data contains a list of items with an image filename
    const updatedData = data.map((item: any) => ({
      ...item,
      imageUrl: `${GITHUB_IMAGE_BASE_URL}${item.imageFilename}`,
    }));

    return updatedData;
  } catch (error) {
    console.error("Error fetching data from GitHub:", error);
    throw error;
  }
};
