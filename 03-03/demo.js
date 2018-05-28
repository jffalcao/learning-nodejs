var fs = require('fs');

var data = {
    name : 'Bob'
};

fs.writeFile('./data.json',JSON.stringify(data), (err) => {
    console.log('File written', err);    
})