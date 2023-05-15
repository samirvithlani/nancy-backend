const express = require('express')
const router = express.Router()

const QuestionController = require('../../controllers/exam/QuestionController')

router.post('/create',QuestionController.createQuestion)
router.get('/getquestion/:id',QuestionController.getQuestionById)

module.exports=router