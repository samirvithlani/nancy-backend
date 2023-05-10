const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ExamSchema  = new Schema({
    
    Course:{
        type: Schema.Types.ObjectId,
        ref:"Course", required:true
    },
    title:{
        type: String
    },
    description:{
        type:String
    },
    marksPerQuestion:{
        type:Number
    },
    isActive:{
        type:Boolean
    },
    totalNumOfQuestion:{
        type:Number
    },
})
module.exports = mongoose.model('Exam', ExamSchema);