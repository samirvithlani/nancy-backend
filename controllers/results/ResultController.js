const ResultSchema = require("../../schemas/result/ResultSchema")
//create result
exports.CreateUserResult = (req, res)=>{
    const result =  ResultSchema(req.body)
    result.save((err,data)=>{
        if(err){
            return res.status(400).json({
                message:err
                
            })
        }else{
            return res.status(200).json({
                data:data ,
                message:'Result Created Successfully'
            })
        }
    })
}
//get all results
exports.GetAllUserResult = (req, res)=>{
    ResultSchema.find().populate('student').populate('Course').populate('Exam').populate('UserExam').exec((err,data)=>{
        if(err){
            return res.status(400).json({
                message:err
                
            })
        }else{
            return res.status(200).json({
                data:data,
                message:'Result Found Successfully'
            })
        }
    })
}
//get result by id
exports.GetUserResultById = (req, res)=>{
    ResultSchema.findById(req.params.id).populate('student').populate('Course').populate('UserExam').exec((err,data)=>{
        if(err){
            return res.status(400).json({
                message:err
                
            })
        }else{
            return res.status(200).json({
                data:data,
                message:'Result Found Successfully'
            })
        }
    })
}
//update result
exports.UpdateUserResult = (req, res)=>{
    ResultSchema.findByIdAndUpdate(req.params.id,req.body,(err,data)=>{
        if(err){
            return res.status(400).json({
                message:err
                
            })
        }else{
            return res.status(200).json({
                data:data,
                message:'Result Updated Successfully'
            })
        }
    })
}
//delete result
exports.DeleteUserResult = (req, res)=>{
    UserResultSchema.findByIdAndDelete(req.params.id,(err,data)=>{
        if(err){
            return res.status(400).json({
                message:err
                
            })
        }else{
            return res.status(200).json({
                data:data,
                message:'Result Deleted Successfully'
            })
        }
    })
}
