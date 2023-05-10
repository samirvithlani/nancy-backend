const QuestionSchema = require('../../schemas/question/QuestionSchema')
//create question
exports.CreateQuestion = (req, res)=>{
    const question = QuestionSchema(req.body)
    question.save((err,data)=>{
        if(err){
            return res.status(400).json({
                message:err
                
            })
        }else{
            return res.status(200).json({
                data:data ,
                message:'Question Created Successfully'
            })
        }
    })
}
//get all question
exports.GetAllQuestion = (req, res)=>{
    QuestionSchema.find().populate('Course').exec((err,data)=>{
        if(err){
            return res.status(400).json({
                message:err
                
            })
        }else{
            return res.status(200).json({
                data:data,
                message:'Question Found Successfully'
            })
        }
    })
}
//get question by id
exports.GetQuestionById = (req, res)=>{
    QuestionSchema.findById(req.params.id).populate('Course').exec((err,data)=>{
        if(err){
            return res.status(400).json({
                message:err
                
            })
        }else{
            return res.status(200).json({
                data:data,
                message:'Question Found Successfully'
            })
        }
    })
}
//update question
exports.UpdateQuestion = (req, res)=>{
    QuestionSchema.findByIdAndUpdate(req.params.id,req.body,(err,data)=>{
        if(err){
            return res.status(400).json({
                message:err
                
            })
        }else{
            return res.status(200).json({
                data:data,
                message:'Question Updated Successfully'
            })
        }
    })
}
//delete question
exports.DeleteQuestion = (req, res)=>{
    QuestionSchema.findByIdAndDelete(req.params.id,(err,data)=>{
        if(err){
            return res.status(400).json({
                message:err
                
            })
        }else{
            return res.status(200).json({
                data:data,
                message:'Question Deleted Successfully'
            })
        }
    })
}
