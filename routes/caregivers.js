var express = require('express');
const checkUserRole = require('../middlewares');
var router = express.Router();

/* GET Home Page. */
router.get('/new', function (req, res) {
  res.render('caregiver.njk', { title: 'ACMS | New CareGiver' });
});



module.exports = router;
