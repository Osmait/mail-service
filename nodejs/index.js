import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

async function main() {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.USER_EMAIL, // generated ethereal user
      pass: process.env.PASS_EMAIL, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: process.env.USER_EMAIL, // sender address
    to: "prueba@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

main().catch(console.error);
