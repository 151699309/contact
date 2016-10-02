var express = require('express');
var router = express.Router();
var controller = require('../controllers/contact');

/* GET home page. */
router.get('/', controller.list);
router.get('/contact/list_json', controller.list_json);
router.get('/contact/add', controller.add_get);
router.get('/contact/update', controller.update_get);
router.get('/contact/getContact', controller.getContact);
router.get('/contact/delete', controller.delete_get);

router.post('/contact/add', controller.add_post);
router.post('/contact/update', controller.update_post);

module.exports = router;
