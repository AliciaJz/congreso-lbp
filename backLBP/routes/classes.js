var express = require('express');
var router = express.Router();

const controller = require ('../controllers/classes.controller');

/* GET classes listing. */
router.get('/', controller.getClasses);
router.post('/new/:idConference', controller.postClass);
router.patch('/:id', controller.patchClass);
router.delete('/:id', controller.deleteClass);

module.exports = router;
