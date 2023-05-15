const express = require('express');
const routes = express.Router()
const BatchController = require('../../controllers/faculty/BatchController');

routes.post("/batch", BatchController.createBatch)
routes.get("/batch", BatchController.getAllBatch)
routes.get("/batch/:id", BatchController.getBatchById)
routes.delete("/batch/:id", BatchController.deleteBatchById)
routes.put("/batch/:id", BatchController.updateBatchById)
routes.get("/student/:id", BatchController.getBatchesByStudentId)

module.exports = routes;