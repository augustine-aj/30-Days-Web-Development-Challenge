var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  title = 'Web Development Challenge'
  const  arr = ['Augustine', 'Someone', 'Nothing', 'who']
  const person = {name: 'Augustine', comments: {comment: 'This is a sample comment', posted_day: 'Monday'}, admin: true}
  res.render('index', { title: title, arr: arr, person: person});
});

module.exports = router;
