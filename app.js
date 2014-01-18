
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var territories = require('./routes/territories');
var passwords = require('./routes/passwords');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var app = express();
var fs = require('fs');
mongoose.connect(process.env.MONGOLAB_URI || 'localhost/territoryapp');

// all environments

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.post('/login', territories.login);
app.get('/territories', territories.index);

app.get('/pwmanager', passwords.pwmanager);
app.get('/pwview', passwords.view);
app.get('/pwdelete', passwords.authdelete);
app.post('/pwpost', passwords.post);


// PDFs
app.get('/:town', function(request, response){
  var townpdf = request.params.town;
  var tempFile="public/files/" + townpdf.toString() + ".pdf";
  fs.readFile(tempFile, function (err,data){
     response.contentType("application/pdf");
     response.send(data);
  });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});