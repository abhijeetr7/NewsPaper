const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors());

const NEWS_API_KEY = '3423bffcb15ed8fec9bd8f8f80fe523c';

app.get('/api/news', async (req, res) => {
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&pageSize=10&apiKey=${NEWS_API_KEY}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news.' });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

