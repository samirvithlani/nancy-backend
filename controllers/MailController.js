
const mailer = require('../Util/mailer');
exports.sendMail = (req, res) => {

    const { to, subject, text } = req.body;

    mailer.sendMail(to, subject, text)
        .then((result) => {
            res.status(200).json({
                msg: "Mail sent successfully",
                result: result
            })
        })
        .catch((err) => {
            res.status(400).json({
                msg: err.message
            })
        })

}