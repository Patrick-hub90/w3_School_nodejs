var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'charlesbaguidi03@gmail.com',
        pass: 'int@2003'
    }
});
var mailOptions ={
    from: 'charlesbaguidi03@gmail.com',
    to: 'charlesbaguidi03@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};
transporter.sendMail(mailOptions,function(error,info){
    if(error) console.log(error);
    else console.log('Email sent: ' + info.response);
});