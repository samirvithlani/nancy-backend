const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserExamSchema  = new Schema({
    
    Exam:{
        type: Schema.Types.ObjectId,
        ref:"Exam", required:true
    },
    student:{
        type: Schema.Types.ObjectId,
        ref:"student", required:true
    },
    status:{
        type: String
    },
    obtainMarks:{
        type: Number
    }
   
})
module.exports = mongoose.model('UserExam', UserExamSchema);