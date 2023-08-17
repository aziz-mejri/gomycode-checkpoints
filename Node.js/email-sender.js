var nodemailer = require('nodemailer');



function sendMail(login,password,to,subject,text){
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: login,
          pass: password
        }
    });

    var mailOptions = {
        from: login,
        to: to,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      
}


sendMail('email@gmail.com','admin','toemail@gmail.com','subject','body email text');

