require("dotenv/config");
const nodemailer = require("nodemailer");

const sendEmail = async (userEmail, userName) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_NODEMAILER,
        pass: process.env.PASSWORD_NODEMAILER,
      },
    });

    await transporter.sendMail({
      from: "'The Wall App Support' <the.wall.app.email@gmail.com>",
      to: userEmail,
      subject: "Welcome to The Wall App",
      text: `Hey ${userName}.
      Welcome to The Wall App, enjoy.`,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendEmail;
