const Bcrypt = require("bcrypt")
const StudentsSchema = require("../../schemas/student/StudentSchema")
//add student
exports.    addStudent=async (req,res)=>{
    const salt = Bcrypt.genSaltSync(10)
    const hash = await Bcrypt.hash(req.body.password, 10)
    var StudentObj ={
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        contact:req.body.contact,
        email:req.body.email,
        password:hash,
        status:req.body.status,
        age:req.body.age,
        role:req.body.role
    }
    const Student = new StudentsSchema(StudentObj)
    Student.save((err,data)=>{
        if(err){
            res.status(400).json({
                message:err.message
            })
        }
        else{
            res.status(200).json({
                message:"Student added successfully",
                data:data
            })
        }
    })
}




//get All students
exports.getStudents=(req,res)=>{
    StudentsSchema.find((err, data)=>{
        if(err){
            res.status(400).json({
                msg:err.message
            })
        }
        else{
            res.status(200).json({
                msg:"Students data fetched successfully",
                data:data
            })
        }

    })
}

//getting student by id
exports.getStudentById=(req,res)=>{
    StudentsSchema.findById(req.params.id,(err, data)=>{
        if(err){
            res.status(400).json({
                msg:err.message
            })
        }
        else{
            res.status(200).json({
                msg:"Admin's data fetched successfully",
                data:data
            })
        }

    })
}

//delete student by id
exports.deleteStudent=(req, res)=>{
    StudentsSchema.findByIdAndDelete(req.params.id,(err, data)=>{
        if(err){
        res.status(400).json({
            msg:err.message
        })}
        else{
            res.status(200).json({
                msg:"Student deleted successfully",
                data:data
            })
        }
    })
}

//login
exports.StudentLogin=(req,res)=>{
    console.log(req.body)
    StudentsSchema.findOne({email:req.body.email},(err, data)=>{
        if(err){
            res.status(400).json({
                msg:err.message
            })
        }
        else{
            if(data){
                if(Bcrypt.compareSync(req.body.password,data.password)){
                    res.status(200).json({
                        msg:"Student login successfully",
                        data:data
                    })
                }
                else{
                    res.status(400).json({
                        msg:"Invalid credentials"
                    })
                }
            }else{
                res.status(400).json({
                    msg:"Invalid credentials"
                })
            }
        }

    })
}

//update Admin
exports.UpdateStudent= (req,res)=>{
    StudentsSchema.findByIdAndUpdate(req.params.id,req.body,(err,data)=>{
        if(err){
            res.status(400).json({
                msg:err.message
            })}
            else{
                res.status(200).json({
                    msg:"Student updated successfully",
                    data:data
                })
            }
    })
}
