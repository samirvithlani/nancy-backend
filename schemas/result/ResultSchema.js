const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ResultSchema = new Schema({
    
    UserExam:{
        type: Schema.Types.ObjectId,
        ref:"UserExam", required:true
    },
    status:{
        type: Boolean
    }
    
})
module.exports = mongoose.model('Result',ResultSchema)