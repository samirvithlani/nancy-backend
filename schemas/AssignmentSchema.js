const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AssignmentSchema = new Schema(
  {
    batchId: [{
      type: Schema.Types.ObjectId,
      ref: "Batch",
    }],

    course: { type: Schema.Types.ObjectId, ref: "Course" },
    
    title: { type: String },
    description: { type: String },
    dueDate: { type: Date },
    isComplete: { type: Boolean, default: false },
    isActive: {
      type: Boolean,
    },
    faculty: {
      type: Schema.Types.ObjectId,
      ref: "Faculty",
    },
    googleDriveId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Assignment", AssignmentSchema);
