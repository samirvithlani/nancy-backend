const UserExamSchema = require("../../schemas/user_exam/UserExamSchema")
//create exam
exports.CreateUserExam = (req, res)=>{
    const userexam =  UserExamSchema(req.body)
    userexam.save((err,data)=>{
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
exports.GetAllUserExam = (req, res)=>{
    UserExamSchema.find().populate('student').populate('Exam').exec((err,data)=>{
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
exports.GetUserExamById = (req, res)=>{
    UserExamSchema.findById(req.params.id).populate('Exam').exec((err,data)=>{
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
exports.UpdateUserExam = (req, res)=>{
    UserExamSchema.findByIdAndUpdate(req.params.id,req.body,(err,data)=>{
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
exports.DeleteUserExam = (req, res)=>{
    UserExamSchema.findByIdAndDelete(req.params.id,(err,data)=>{
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
