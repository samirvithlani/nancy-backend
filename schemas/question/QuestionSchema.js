const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const QuestionSchema  = new Schema({
    
    Course:{
        type: Schema.Types.ObjectId,
        ref:"Course", required:true
    },
    question:{
        type: String
    },
    option1:{
        type:String
    },
    option2:{
        type:String
    },
    option3:{
        type:String
    },
    option4:{
        type:String
    },
    correctAns:{
        type:String
    }
})
module.exports = mongoose.model('Question', QuestionSchema);