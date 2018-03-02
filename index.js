var express = require('express');
var app = express();
const { Client } = require('pg');

app.set('port', (process.env.PORT || 5000));

var connect = "postgres://ppidkbjyvplbrc:fccf8db6e6e7d42653a86669c07f0b68d54309484ae3640d8cc3059940cda6c5@ec2-107-22-183-40.compute-1.amazonaws.com:5432/d1gnr48gkr1asn";
const client = new Client({
  user: 'ppidkbjyvplbrc',
  database: 'd1gnr48gkr1asn',
  password: 'fccf8db6e6e7d42653a86669c07f0b68d54309484ae3640d8cc3059940cda6c5',
  port: 5432,
});

app.get('/', function(req, res){
  client.connect();
  client.query('INSERT INTO Test VALUES(1,'+'test_from GET'+');',(err, res) =>{
    console.log("Yo");
  });
  res.send('Test Successfully');
  res.end();
});
app.post('/', function(req, res){
  res.send("POST Test");
  res.end();
})
app.listen(app.get('port'), function() {
    console.log("App is running on port " + app.get('port'));
});
