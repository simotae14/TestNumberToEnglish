const express = require('express');
const bodyParser = require('body-parser');
const {
    numberToEnglish,
} = require('./numberToWords');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/greeting', (req, res) => {
  res.send({ greeting: 'Hello From Simone' });
});

// api that convert the digits
app.post('/api/convert', (req, res) => {
    const numberInDigits = req.body.numberInDigits;
    let numberInWords = '';
    try {
        numberInWords = numberToEnglish(numberInDigits);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    res.send({
        numberInDigits,
        numberInWords
    });
  });

app.listen(port, () => console.log(`Listening on port ${port}`));