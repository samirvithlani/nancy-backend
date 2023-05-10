const express = require('express'); 
const router = express.Router();
const ResultController = require('../../controllers/results/ResultController')

router.post('/result', ResultController.CreateUserResult)
router.get('/result', ResultController.GetAllUserResult)
router.get('/result/:id', ResultController.GetUserResultById)
router.delete('/result/:id', ResultController.DeleteUserResult)
router.put('/result/:id', ResultController.UpdateUserResult)

module.exports = router;