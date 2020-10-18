//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname+'/date.js');
var items = ['Buy Food', 'Cook Food', 'Eat food'];
let workItems = [];
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('public'));
app.get('/', function(req, res) {
  let day = date.getDate();
  res.render('list', {
    listTitle: day,
    newListItem: items
  });
});
//if you are assigning a an array as constant then you can push elements in an array
//but cannot directly assign the values to the array

app.post('/', function(req, res) {
  let item = req.body.newItem;
  if (req.body.list === 'Work') {
    workItems.push(item);
    res.redirect('/work');
  } else {
    items.push(item);
    res.redirect('/');
  }

})
app.get('/work', function(req, res) {
  res.render('list', {
    listTitle: 'Work List',
    newListItem: workItems
  });
});


app.listen(process.env.PORT || 3000, function() {
  console.log('server running on port 3000');
});
