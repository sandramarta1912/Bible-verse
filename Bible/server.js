let express = require('express');
let app = express();
let React = require('react');
let ReactDOMServer = require('react-dom/server');
let axios = require('axios');
let c = require('./Component.js');

app.set('port', 3000);
app.get('/', function (req, res) {
    axios
        .get('http://labs.bible.org/api/?type=json&passage=random')
        .then(function(response){
            let bibleVerse = React.createElement(c.bibleVerse, {verse: response.data});

            let html = ReactDOMServer.renderToString(bibleVerse);

            res.send(html);
        })
        .catch(function(error) {
                console.log(error);
        });
});
app.listen(app.set("port"), function(){
    console.log('Express server started at port ' + app.set("port"));
});