const express = require('express')
const router = express.Router()

//ATTEMPTED EXAM INFO

const examController = require('../../controllers/exam/ExamHistoryController')

router.post('/addexam',examController.addExamData)
router.get('/getexamhistory/:uid/:id',examController.getExamDataById)

module.exports = router