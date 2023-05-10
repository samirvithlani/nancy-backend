const express = require('express'); 
const router = express.Router();
const ExamQuestionController = require('../../controllers/exam_question/ExamQuestionController')

router.post('/examques', ExamQuestionController.CreateExamQues)
router.get('/examques', ExamQuestionController.GetAllExamQues)
router.get('/examques/:id', ExamQuestionController.GetExamQuesById)
router.delete('/examques/:id', ExamQuestionController.DeleteExamQues)
router.put('/examques/:id', ExamQuestionController.UpdateExamQues)

module.exports = router;