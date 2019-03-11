const cors = require('cors');
let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let {
    numberToEnglish,
} = require('./numberToWords');
const swaggerJSDoc = require('swagger-jsdoc');
let app = express();
app.use(cors());
app.options('*', cors());
let port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// -- setup up swagger-jsdoc --
const swaggerDefinition = {
    info: {
        title: 'Number to English',
        version: '1.0.0',
        description: 'Converts number in words',
    },
    host: 'localhost:3000',
    basePath: '/',
};
const options = {
    swaggerDefinition,
    apis: [path.resolve(__dirname, 'server.js')],
};
const swaggerSpec = swaggerJSDoc(options);

// -- routes for docs and generated swagger spec --
app.get('/docs', (req, res) => {
    res.sendFile(path.join(__dirname, 'redoc.html'));
});

app.get('/docs/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

/**
 * @swagger
 * /api/greeting:
 *   get:
 *     summary: Title of the App
 *     description: Returns the title of the app
 *     tags:
 *       - title
 *     responses:
 *       200:
 *         description: Title of the App
 *         schema:
 *           type: object
 *           properties:
 *             greeting:
 *               type: string
 *               description: the title
 */
app.get('/api/greeting', (req, res) => {
  res.send({ greeting: 'Welcome, Convert your number' });
});

/**
 * @swagger
 * /api/convert:
 *   post:
 *     summary: Convert a number in words
 *     description: Convert the number and returns an object with the conversion
 *     tags:
 *       - conversion
  *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numberInDigits:
 *                 type: string
 *                 value:
 *                   type: string
 *     responses:
 *       200:
 *         description: Convert the Number in WordsAdds the animals in body
 *         schema:
 *           type: object
 *           properties:
 *             numberInDigits:
 *                 type: string
 *                 value:
 *                   type: string
 *                   numberInWords:
 *                      type: string
 *                      value:
 *                          type: string
 */
// api that convert the digits
app.post('/api/convert', (req, res) => {
    const numberInDigits = req.body.numberInDigits;
    let numberInWords = '';
    try {
        numberInWords = numberToEnglish(numberInDigits);
        res.send({
            numberInDigits,
            numberInWords
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg: error.message});
    }
});

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app; // for testing