const UserExamAnsSchema = require("../../schemas/user_exam_ans/UserExamAnsSchema")
//create exam answers   
exports.CreateUserExamAns = (req, res)=>{
    const userexamans =  UserExamAnsSchema(req.body)
    userexamans.save((err,data)=>{
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
exports.GetAllUserExamAns = (req, res)=>{
    UserExamAnsSchema.find().populate('student').populate('Exam').populate('Question').exec((err,data)=>{
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
exports.GetUserExamByIdAns = (req, res)=>{
    UserExamAnsSchema.findById(req.params.id).populate('student').populate('Exam').populate('Question').exec((err,data)=>{
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
exports.UpdateUserExamAns = (req, res)=>{
    UserExamAnsSchema.findByIdAndUpdate(req.params.id,req.body,(err,data)=>{
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
exports.DeleteUserExamAns = (req, res)=>{
    UserExamAnsSchema.findByIdAndDelete(req.params.id,(err,data)=>{
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
