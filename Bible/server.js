let express = require('express');
let app = express();
let path = require('path');
let axios = require('axios');

app.set('port', 3000);
app.use('/Component.js', express.static(path.join('Component.js')));
app.get('/data', function (req, res) {
    axios
        .get('http://labs.bible.org/api/?type=json&passage=random')
        .then(function(res) {}
        .catch(function (error) {
            console.log(error);
        });
});
app.get('/verse', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(app.set("port"), function(){
    console.log('Express server started at port ' + app.set("port"));
});