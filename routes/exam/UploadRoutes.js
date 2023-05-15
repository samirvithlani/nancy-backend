const express = require('express');
const router = express.Router();
const uploadController = require('../../controllers/exam/UploadController');

router.post('/upload',uploadController.uploadFile);
router.post('/questions',uploadController.AddQuestionsFromFile)

module.exports = router;