const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/UploadController')

router.post('/upload',uploadController.uploadAssignment)
router.post('/questions',uploadController.AddQuestionsFromFile)
module.exports = router;