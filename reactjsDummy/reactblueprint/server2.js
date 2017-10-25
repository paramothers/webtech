'use strict';
var express = require('express');
var bodyparser = require('body-parser');
var app = express();
var morgan = require('morgan');
var cors = require('cors');
app.use(cors({ credentials: true, origin: true }));
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/websearchapi/sites');

var siteSchema = new mongoose.Schema({ title: String, link: String, desc: String });
var searchDb = mongoose.model('sites', siteSchema);

var routes = function(app) {
    app.use(bodyparser.json());
    app.get('/search/:title', function(req, res) {
        searchDb.find({ title: req.params.title }, function(err, data) {
            if (err) return res.status(500).send({ 'msg': 'couldn\'t find anything' });
            res.json(data);
        });
    });
};

var router = express.Router();
routes(router);
app.use('/v1', router);

var port = process.env.PORT || 5000;
app.listen(port, function() {
    
    console.log('server listening on port ' + (process.env.PORT || port));
});