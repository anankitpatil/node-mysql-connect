var express = require("express");
var mysql = require("mysql");
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

var wp_posts;
connection.connect(function(err){
  if(!err) {
      console.log("Database is connected ... \n\n");
      connection.query('SELECT * from wp_posts', function(err, rows, fields) { wp_posts = rows; });
  } else {
      console.log("Error connecting database ... \n\n");
  }
});

app.get("/",function(req,res){
  //Begin page load
  res.render('content');
});

app.get("/posts",function(req,res){
  //Send posts
  res.send(wp_posts);
});

app.listen(3000);
