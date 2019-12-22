const nodemailer = require('nodemailer');
const { POST_LOGIN, POST_PASSWORD } = require('../config.json')

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: POST_LOGIN,
        pass: POST_PASSWORD
    }

});
var mailOptions = {
    from: 'WoldMail',
    to: 'roman.kameniev@nure.ua',
    subject: 'Welcome!',
    text: 'Hi there, now you are registered on WoldMail! \nHave a nice day)'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
}); 