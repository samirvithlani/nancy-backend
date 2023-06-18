const multer = require("multer");
const path = require("path");
const uploadSchema = require("../schemas/UploadSchema");
const googleController = require("../controllers/GoogleController");
const { file } = require("googleapis/build/src/apis/file");
const questionSchema = require("../schemas/exam/QuestionSchema");
//const uploadSchema=require("../schemas/UploadSchemaa");
const xlsx = require("xlsx");

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 15000000 },
}).single("file");

const readDataFromFile = (file1) => {
  const file = xlsx.readFile(file1);
  const sheets = file.SheetNames;
  var data = [];

  for (let i = 0; i < sheets.length; i++) {
    const temp = xlsx.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);

    temp.forEach((t) => {
      data.push(t);
    });
  }

  // console.log('type',data[0].options.split(',')) ----options Array
  // example of that aray======[ 'gujarat', 'gandhinagar', 'delhi', 'goa' ]

  data.map((d) => {
    var opt = [];
    opt = d.options.split(",");
    d.options = opt;
  });
  console.log("final to db", data);
  return data;
};
exports.AddQuestionsFromFile = (req, res) => {
  var path = req.body.path;

  var data = readDataFromFile(path);

  questionSchema.insertMany(data, (err, result) => {
    if (err) {
      res.status(500).json({
        message: err.message || "Some error occurred while creating the data.",
      });
    } else {
      res.status(200).json({
        message: "Data inserted successfully",
        data: result,
      });
    }
  });
};

exports.uploadAssignment = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      res.status(400).json({ message: err.message });
    } else {
      if (req.file == undefined) {
        res.status(400).json({ message: "No file selected" });
      } else {
        if (req.file.size > 150000000) {
          return res.status(400).json({ message: "file too large" });
        } else {
          var x = await googleController.uploadFile(req.file.path);
          if (x !== undefined || x !== null || x !== 0) {
            //const abspath = path.resolve(req.file.OriginalName)
            const uploadobj = new uploadSchema({
              assignmentName: req.file.OriginalName,
              //  assignmentPath: abspath,
              assignmentSize: req.file.size,
              assignmentType: req.file.mimeType,
              googleDriveId: x,
            });
            uploadobj.save((err, data) => {
              if (err) {
                res
                  .status(400)
                  .json({ message: "Error in uploading assignment" });
              } else {
                res
                  .status(200)
                  .json({
                    message: "assignment uploaded successfully",
                    data: data,
                    file: req.file,
                  });
              }
            });
          }
        }
      }
    }
  });
};
