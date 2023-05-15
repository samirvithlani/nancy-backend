const mailer = require('nodemailer');

const sendMail = async (to,subject,text)=>{

    let transporter = mailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587, //465 for ssl
        secure: false, // true for 465, false for other ports
        auth:{
            user:"samir.royal4all@gmail.com",
            pass:"fhtqlkwefxbxmhlw"
        } 
    })

    const mailOptions ={
        from:'samir.royal4all@gmail.com',
        to:to,
        subject:subject,
        text:text
    }
    transporter.sendMail(mailOptions,(err,info)=>{
        if(err){
            console.log(err);
        }else{
            console.log(info);
        }
    })
}
module.exports = {sendMail};