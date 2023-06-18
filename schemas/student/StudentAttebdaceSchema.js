const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentAttendanceSchema = new Schema({

    student:{
        type:Schema.Types.ObjectId,
        ref:'student'
    },
    attendance:[
        {
            date:{
                type:Date,
                default:Date.now()
            },
            status:{
                type:String,
                enum:['present','absent'],
                default:'present'
            }
        }
    ]


},
{
    timestamps:{
        createdAt:'created_at',
        updatedAt:'updated_at',
        currentTime: () => Math.floor(Date.now() / 1000)
        
    }
    //ist timezone
})
module.exports = mongoose.model("student_attendance", StudentAttendanceSchema);