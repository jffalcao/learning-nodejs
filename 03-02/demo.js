var fs = require('fs');

fs.readdir('/Users/jffalcao/', (err, data) => {
    console.log(data);    
});