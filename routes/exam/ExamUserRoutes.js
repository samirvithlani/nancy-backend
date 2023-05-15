const express = require('express')
const router = express.Router()

const ExamUserController = require('../../controllers/exam/ExamUserController')

router.post('/create',ExamUserController.createUser)
router.get('/getallusers',ExamUserController.getAllUserDetails)
router.get('/getuserbyid/:id',ExamUserController.getUserDetailsById)
router.get('/getuserbyEid/:id',ExamUserController.getAppearedUsersByExamid)
router.post('/validuser',ExamUserController.isValidUser)

module.exports=router