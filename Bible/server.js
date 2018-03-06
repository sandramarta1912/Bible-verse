let express = require('express');
let app = express();
let path = require('path');

app.set('port', 3000);
app.use('/Component.js', express.static(path.join('Component.js')));
app.get('/verse', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.listen(app.set("port"), function(){
    console.log('Express server started at port ' + app.set("port"));
});