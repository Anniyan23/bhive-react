const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());

app.get('/data', async (req, res) => {
  try {
    const response = await axios.get('https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/data.json');
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

app.get('/images/:imageName', async (req, res) => {
  try {
    const { imageName } = req.params;
    const imageUrl = `https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/static_assets/${imageName}`;
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    res.set('Content-Type', 'image/png'); // Adjust the content type as necessary
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error fetching image');
  }
});

app.listen(PORT, () => {
  console.log(`CORS Proxy Server running on port ${PORT}`);
});
