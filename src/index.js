const express = require('express');
const apiRouter = require('./routes/apiRouter');

const PORT = 3000;

const app = express();


// The code below starts the API with these parameters:
// 1 - The PORT where your API will be available
// 2 - The callback function (function to call) when your API is ready
app.listen(PORT, () =>
  console.log(`The people-by-location API is running on: http://localhost:${PORT}.`)
);

app.get('/', (request, response) => {
    response.send('Welcome on the books API! Take a breath and start using it!')
});

app.use('/api', apiRouter);

app.use('/*', (req, res, next) => {
    next({status: 404, msg: 'Path not found'})
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).send( err || 'Internal Server Error')
});

module.exports = app;

