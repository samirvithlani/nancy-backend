const express = require('express')
const router = express.Router()


const ExamController = require('../../controllers/exam/ExamController1')

// router.post('/create',auth.auth(),ExamController.createExam)
router.post('/create',ExamController.createExam)
router.post('/removequestion',ExamController.removeQuestion)
router.post('/addquestion',ExamController.addQuestion)
router.get('/getallexams',ExamController.getAllExams)
router.get('/getexam/:id',ExamController.getExamById)


module.exports=router