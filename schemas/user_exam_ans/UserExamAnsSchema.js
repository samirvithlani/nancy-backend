const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserExamAnsSchema  = new Schema({
    
    student:{
        type: Schema.Types.ObjectId,
        ref:"student", required:true
    },
    Exam:{
        type: Schema.Types.ObjectId,
        ref:"Exam", required:true
    },
    Question:{
        type: Schema.Types.ObjectId,
        ref:"Question", required:true
    },
    userAnswer:{
        type: String
    },
    ansStatus:{
        type: Boolean
    }
})
module.exports = mongoose.model('UserExamAns', UserExamAnsSchema);