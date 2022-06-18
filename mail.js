const nodemailer = require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')

const auth ={
    auth:{
        api_key:'a79988daf3f9c672d69b3bf6b5d65493-50f43e91-8426db9d',
        domain:'sandbox6a867390f8514658ac9c299aa2e24643.mailgun.org'
    }
}

const transporter = nodemailer.createTransport(mailGun(auth))

const sendMail = (email,text,cb) =>{
    const mailOptions = {
        from:email,
        to:'kush.726@gmail.com',
        subject:'Testing',
        text:text
    };
    
    transporter.sendMail(mailOptions,function(err,data){
        if(err){
            cb(err,null)
        }else{
            cb(null,data)
        }
    })
}
module.exports = sendMail
