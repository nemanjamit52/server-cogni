const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/test', (req, res) => {
  res.json({
    message: 'Hello from server!',
  });
});

app.listen(port);
