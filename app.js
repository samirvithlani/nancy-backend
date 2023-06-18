const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//const test = require('./routes/admin/Test')
const AdminRoutes = require("./routes/admin/AdminRoutes");
const StudentRoutes = require("./routes/student/StudentRoutes");
const RoleRoutes = require("./routes/RoleRoutes");
const FacultyRoutes = require("./routes/faculty/FacultyRoutes");
const CourseRoutes = require("./routes/CourseRoutes");
const AttendanceRoutes = require("./routes/AttendanceRoutes");
const PaymentRoutes = require("./routes/PaymentRoutes");
const AssignmentRoutes = require("./routes/AssignmentRoutes");
const UploadRoutes = require("./routes/uploadRoutes");
const BatchRoutes = require("./routes/faculty/BatchRoutes");
const QuestionRoutes = require("./routes/exam/QuestionRoutes");
const ExamRoutes = require("./routes/exam/ExamRoutes");
const ExamQuesRoutes = require("./routes/exam_question/ExamQuesRoutes");
const UserExamRoutes = require("./routes/user_exam/UserExamRoutes");
const UserExamAnsRoutes = require("./routes/user_exam_ans/UserExamAnsRoutes");
const ResultRoutes = require("./routes/result/resultRoutes");
const ExamUserResultRoutes = require('./routes/exam/ExamUserResultRoutes')
const ExamHistoryRoutes = require('./routes/exam/ExamHistoryRoutes')
const ExamUserRoute = require('./routes/exam/ExamUserRoutes')
const uploadRoutes = require('./routes/exam/UploadRoutes');
const mailRoutes = require('./routes/mailerRoutes');






app.use("/admin", AdminRoutes);
app.use("/student", StudentRoutes);
app.use("/roles", RoleRoutes);
app.use("/faculty", FacultyRoutes);
app.use("/course", CourseRoutes);
app.use("/attendance", AttendanceRoutes)
app.use("/payment", PaymentRoutes)
app.use("/assignment", AssignmentRoutes)
app.use("/upload", UploadRoutes)
app.use("/batch", BatchRoutes)
app.use("/question", QuestionRoutes)
//app.use("/exam", ExamRoutes)
app.use("/examques",ExamQuesRoutes)
app.use("/userexam", UserExamRoutes)
app.use("/userexamans", UserExamAnsRoutes)
app.use("/result", ResultRoutes)

app.use('/examresult',ExamUserResultRoutes)
app.use('/examhistory',ExamHistoryRoutes)
app.use('/exam',ExamRoutes)
app.use('/examuser',ExamUserRoute)
app.use('/examquestion',QuestionRoutes)
app.use('/upload1',uploadRoutes)
app.use('/mail',mailRoutes)
mongoose.connect("mongodb+srv://samir:samir@cluster0.key63fx.mongodb.net/test", (err) => {
  if (err) {
    console.log("Database not connected");
  } else {
    console.log("Database connected");
  }
});
//server
app.listen(PORT, (err) => {
  if (err) {
    console.log("Server not started");
  } else {
    console.log("Server started..." + PORT);
  }
});
