const mongoose=require('mongoose')
const Schema = mongoose.Schema


const examSchema = new Schema({
   
    name:{
        type:String,
        required:true
    },
    questions:[{
        type:Schema.Types.ObjectId,
        ref:'Questions'
    }]
})

module.exports= mongoose.model('Exam1',examSchema)