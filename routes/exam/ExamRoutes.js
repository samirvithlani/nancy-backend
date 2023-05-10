const express = require('express'); 
const router = express.Router();
const ExamController = require('../../controllers/exam/ExamController')

router.post('/exam', ExamController.CreateExam)
router.get('/exam', ExamController.GetAllAExam)
router.get('/exam/:id', ExamController.GetExamById)
router.delete('/exam/:id', ExamController.DeleteExam)
router.put('/exam/:id', ExamController.UpdateExam)

module.exports = router;