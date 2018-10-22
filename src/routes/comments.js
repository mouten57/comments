const express = require('express');
const router = express.Router();

const commentController = require('../controllers/commentController');
const validation = require('./validation');

//error here-> getting undefined object
// router.get('/comments/', commentController.index);
router.post(
  '/comments/create',
  validation.validateComments,
  commentController.create
);

router.post('/comments/:id/destroy', commentController.destroy);

module.exports = router;
