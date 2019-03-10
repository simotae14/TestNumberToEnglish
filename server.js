const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/greeting', (req, res) => {
  res.send({ greeting: 'Hello From Simone' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));