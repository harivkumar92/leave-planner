import express from 'express';
import bodyParser from 'body-parser'
import route from './route';
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', express.static(__dirname + '/api/view'));

app.use('/api', route);

module.exports = app;