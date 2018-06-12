var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

dbUrl = 'mongodb://user:Password!1234@ds255930.mlab.com:55930/learning-node'

var messages = [
    {name: 'Tim', message: 'Hello'},
    {name: 'Jane', message: 'Hi'}
];

app.get('/messages', (req, res) => {
    res.send(messages);
});

app.post('/messages', (req, res) => {
    console.log(req.body);    
    messages.push(req.body);
    io.emit('message', req.body);
    res.sendStatus(200);
});

io.on('connection', (socket) => {
    console.log('A user connected');    
});

mongoose.connect(dbUrl, (err) => {
    console.log('MongoDB connection error: ', err);    
});

var server = http.listen(3000, () => {
    console.log('Server is listening on http://localhost:' + server.address().port);
    
})