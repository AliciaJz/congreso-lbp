var express = require('express');
var router = express.Router();

const controller = require ('../controllers/classes.controller');

/* GET classes listing. */
router.get('/', controller.getClasses);
router.post('/', controller.postClasses);

module.exports = router;
