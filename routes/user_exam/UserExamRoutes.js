const express = require('express'); 
const router = express.Router();
const UserExamController = require('../../controllers/user_exam/UserExamController')

router.post('/userexam',UserExamController.CreateUserExam )
router.get('/userexam',UserExamController.GetAllUserExam )
router.get('/userexam/:id',UserExamController.GetUserExamById )
router.delete('/userexam/:id',UserExamController.DeleteUserExam )
router.put('/userexam/:id',UserExamController.UpdateUserExam )

module.exports = router;