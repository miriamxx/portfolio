const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (req, res) => res.json({ status: 'api ok' }));

app.post('/api/contact', (req, res) => {
  const payload = req.body || {};
  console.log('Contact submitted:', payload);
  // TODO: integrate email or persistence
  res.json({ status: 'received' });
});

app.get('/api/resume', (req, res) => {
  // send the resume file copied to the client assets during scaffold
  const filePath = path.resolve(__dirname, '../client/src/assets/resume/Official Resume .pdf');
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error('Resume sendFile error', err);
      res.status(404).end();
    }
  });
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`API listening: http://localhost:${port}`));
