var express = require('express');
var app = express();

app.use(express.static(__dirname));

var messages = [
    {name: 'Tim', message: 'Hello'},
    {name: 'Jane', message: 'Hi'}
];

app.get('/messages', (req, res) => {
    res.send(messages);
});

var server = app.listen(3000, () => {
    console.log('Server is listening on http://localhost:' + server.address().port);
    
})