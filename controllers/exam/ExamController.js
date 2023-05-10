const ExamSchema = require("../../schemas/exam/ExamSchema")
//create exam
exports.CreateExam = (req, res)=>{
    const exam =  ExamSchema(req.body)
    exam.save((err,data)=>{
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
//get all aexam
exports.GetAllAExam = (req, res)=>{
    ExamSchema.find().populate('Course').exec((err,data)=>{
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
exports.GetExamById = (req, res)=>{
    ExamSchema.findById(req.params.id).populate('Course').exec((err,data)=>{
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
exports.UpdateExam = (req, res)=>{
    ExamSchema.findByIdAndUpdate(req.params.id,req.body,(err,data)=>{
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
exports.DeleteExam = (req, res)=>{
    ExamSchema.findByIdAndDelete(req.params.id,(err,data)=>{
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
