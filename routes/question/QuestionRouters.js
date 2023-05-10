const express = require('express'); 
const router = express.Router();
const QuestionController = require('../../controllers/question/QuestionController')

router.post('/question', QuestionController.CreateQuestion)
router.get('/question', QuestionController.GetAllQuestion)
router.get('/question/:id', QuestionController.GetQuestionById)
router.delete('/question/:id', QuestionController.DeleteQuestion)
router.put('/question/:id', QuestionController.UpdateQuestion)

module.exports = router;