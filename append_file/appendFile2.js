var fs = require('fs');

fs.open('my_new_test_file2.txt', 'w', function(err, file) {
    if(err) throw err;
    console.log('Saved!');
});


//creates a new file with the 'w' arguement indicating to write