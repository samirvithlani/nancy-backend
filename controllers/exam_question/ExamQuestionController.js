const ExamQuesSchema = require("../../schemas/exam_question/ExamQuestionSchema")
//create exam
exports.CreateExamQues = (req, res)=>{
    const examques =  ExamQuesSchema(req.body)
    examques.save((err,data)=>{
        if(err){
            return res.status(400).json({
                message:err
                
            })
        }else{
            return res.status(200).json({
                data:data ,
                message:'Exam Created Successfully'
            })
        }
    })
}
//get all examques
exports.GetAllExamQues = (req, res)=>{
    ExamQuesSchema.find().populate('Exam').populate('Question').exec((err,data)=>{
        if(err){
            return res.status(400).json({
                message:err
                
            })
        }else{
            return res.status(200).json({
                data:data,
                message:'Exam Found Successfully'
            })
        }
    })
}
//get exam by id
exports.GetExamQuesById = (req, res)=>{
    ExamQuesSchema.findById(req.params.id).populate('Exam').populate('Question').exec((err,data)=>{
        if(err){
            return res.status(400).json({
                message:err
                
            })
        }else{
            return res.status(200).json({
                data:data,
                message:'Exam Found Successfully'
            })
        }
    })
}
//update exam
exports.UpdateExamQues = (req, res)=>{
    ExamQuesSchema.findByIdAndUpdate(req.params.id,req.body,(err,data)=>{
        if(err){
            return res.status(400).json({
                message:err
                
            })
        }else{
            return res.status(200).json({
                data:data,
                message:'Exam Updated Successfully'
            })
        }
    })
}
//delete exam
exports.DeleteExamQues = (req, res)=>{
    ExamQuesSchema.findByIdAndDelete(req.params.id,(err,data)=>{
        if(err){
            return res.status(400).json({
                message:err
                
            })
        }else{
            return res.status(200).json({
                data:data,
                message:'Exam Deleted Successfully'
            })
        }
    })
}
