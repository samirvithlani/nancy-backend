const student_attendance = require("../../schemas/student/StudentAttebdaceSchema");

//create student attendance
exports.CreateStudentAttendance = (req, res) => {
    const attendance = student_attendance(req.body)
    attendance.save((err, data) => {
        if (err) {
            return res.status(400).json({
                message: err

            })
        } else {
            return res.status(200).json({
                data: data,
                message: 'Student Attendance Created Successfully'
            })
        }
    })
}