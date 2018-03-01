var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res){
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
