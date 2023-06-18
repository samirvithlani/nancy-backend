const router = express.Router();
const Studentattdancecontroller = require("../../controllers/student/Studentattdancecontroller");

router.post("/create", Studentattdancecontroller.CreateStudentAttendance);

module.exports = router;