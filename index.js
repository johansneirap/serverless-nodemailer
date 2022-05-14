const nodemailer = require("nodemailer");
module.exports.handler = async (event) => {
    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: true, 
      auth: {
        user: testAccount.user, 
        pass: testAccount.pass, 
      },
    });
    
    const body = JSON.parse(event.body)
   
    let info = await transporter.sendMail({
      from: '"No reply something" <contacto@publimochilas.cl>', 
      to: "some@mail.com, any@mail.com",
      subject: `Message from ${ body.name }`, 
      text: body.message,
      html: `<b>${ body.message }</b>`,
    });
   
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        data: {
            input: event,
            messageId: info.messageId,
            previewURL: nodemailer.getTestMessageUrl(info)
        },
        body: body,
      },
      null,
      2
    ),
  };
};