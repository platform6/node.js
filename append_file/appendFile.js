var fs = require('fs');

fs.appendFile('my_new_test_file.txt', 'Inserting this text - now diff', function (err) {
    if(err) throw err;
    console.log('Saved');
});