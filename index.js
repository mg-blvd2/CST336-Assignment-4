/*jshint esversion: 6 */

const express = require('express');
const app = express();
const oneLinerJoke = require("one-liner-joke");
var getRandomJoke;

app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

app.get('/', function (req, res) {
  getRandomJoke = oneLinerJoke.getRandomJoke({
    'exclude_tags': ['dirty', 'racist', 'sex', 'flirty', 'blonde', 'black']
  });
  console.log(getRandomJoke);
  res.render('index.ejs', { title: 'The Most Popular Coding Languages!', joke: getRandomJoke.body });
});

app.get('/python', function (req, res) {
  res.render('python.ejs', { title: 'Python', joke: getRandomJoke.body });
});

app.get('/javascript', function (req, res) {
  res.render('js.ejs', { title: 'JavaScript', joke: getRandomJoke.body });
});

app.get('/php', function (req, res) {
  res.render('php.ejs', { title: 'PHP', joke: getRandomJoke.body });
});

app.listen('8081', '127.0.0.1', function () {
  console.log('Express Server is Running...');
});
