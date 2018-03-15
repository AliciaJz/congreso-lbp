var express = require('express');
var router = express.Router();

const controller = require ('../controllers/conferences.controller');

/* GET conferences listing. */
router.get('/', controller.getConferences);
router.post('/', controller.postConferences);

module.exports = router;
