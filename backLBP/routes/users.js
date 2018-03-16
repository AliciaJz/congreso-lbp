var express = require('express');
var router = express.Router();

const controller = require ('../controllers/users.controller');
/* GET users listing. */
router.get('/', controller.getUsers);
router.post('/', controller.postUser);
router.patch('/:id', controller.patchUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;
