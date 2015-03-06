var express = require("express");
var mysql = require("mysql");
var jsdom = require("jsdom");
var request = require("request");
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'IBUYUKNO_V2'
});
var app = express();
app.use('/assets', express.static(__dirname + '/assets'));
app.use('/img', express.static(__dirname + '/img'));
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

connection.connect(function(err){
  if(!err) {
      console.log("Database is connected ... \n\n");
      connection.query('SELECT * from wp_posts LIMIT 10', function(err, rows, fields) { });
  } else {
      console.log("Error connecting database ... \n\n");
  }
});

app.get("/",function(req,res){
  //Begin page load
  //res.render('content');
  jsdom.env({
    html: body,
    scripts: ['/assets/jquery-2.1.3.min.js']
  }, function(err, window){
    var $ = window.jQuery;

    console.log($('title').text());
    res.end($('title').text());
  });
});

app.get("/about",function(req,res){
  //Begin page load
  res.render('content');
});

app.listen(3000);
