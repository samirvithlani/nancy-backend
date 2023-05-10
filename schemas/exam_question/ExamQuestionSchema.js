const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ExamQuestionSchema  = new Schema({
    
    Exam:{
        type: Schema.Types.ObjectId,
        ref:"Exam", required:true
    },
    Question:{
        type: Schema.Types.ObjectId,
        ref:"Question", required:true
    }
   
})
module.exports = mongoose.model('ExamQuestion', ExamQuestionSchema);