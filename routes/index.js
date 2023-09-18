var express = require('express');
const Resident = require('../models/resident');
const checkUserRole = require('../middlewares');
var router = express.Router();

/* GET Home Page. */
router.get('/', function (req, res) {
  res.render('home.njk', { title: 'ACMS | Home' });
});

/* GET Dashboard. */
router.get('/dashboard',checkUserRole(["caregiver","admin"]), async function (req, res) {
  try {
    const residents = await Resident.find()
    return res.render('dashboard.njk', { title: 'ACMS | Dashboard', user: req.user, residents: residents });
  } catch (error) {
    return res.render('dashboard.njk', { title: 'ACMS | Dashboard', user: req.user });
  }
});

module.exports = router;
