const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

//Model
const models = require("./models");
//Sync Database
models.sequelize.sync().then(function () {
    console.log("Nice, Database looks fine !");
}).catch(function (err) {
    console.log(err, "Something went wrong with the Database Update !");
})

//require our Route
require("./routes")(app);

app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));

const port = parseInt(process.env.PORT, 10) || 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => {
    console.log('Go to http://localhost:' + port + '/users so you can see the data.');
});

module.exports = app;