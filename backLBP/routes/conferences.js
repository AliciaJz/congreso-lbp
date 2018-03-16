var express = require('express');
var router = express.Router();

const controller = require ('../controllers/conferences.controller');

/* GET conferences listing. */
router.get('/', controller.getConferences);
router.post('/', controller.postConference);
router.patch('/:id', controller.patchConference);
router.delete('/:id', controller.deleteConference);

module.exports = router;
