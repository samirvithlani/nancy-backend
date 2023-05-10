const mongoose = require('mongoose')

const schema = mongoose.Schema
const uploadSchema = new schema({
    
    assignmentName: {
        type: String,

    },

    assignmentType: {
        type: String,
     
    },

    assignmentSize:{
        type: Number,
     
    },

    assignmentPath:{
        type: String,
        //required: true
    },
    googleDriveId: {
        type: String,
       // required: true,
      },
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('upload', uploadSchema)