const express = require('express'); 
const router = express.Router();
const UserExamAnsController = require('../../controllers/user_exam_ans/UserExamAnsController')

router.post('/userexamans',UserExamAnsController.CreateUserExamAns)
router.get('/userexamans',UserExamAnsController.GetAllUserExamAns)
router.get('/userexamans/:id',UserExamAnsController.GetUserExamByIdAns)
router.delete('/userexamans/:id',UserExamAnsController.DeleteUserExamAns)
router.put('/userexamans/:id',UserExamAnsController.UpdateUserExamAns)

module.exports = router;