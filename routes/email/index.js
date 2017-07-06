const express     = require("express");
const nodemailer  = require("nodemailer");

const app     = express.Router();

const auth    = require("../auth");
const config  = require("./config");
app.use(auth);

console.log("config", config);
app.get('/send', (req, res) => {
  const email = req.query.email;
  const subject = req.query.subject;
  const content = req.query.content;
  if (!email) {
    return res.status(401).json('email is missing');
  }
  const user = config.smtpUser;
  const smtpConfig = {
    host: config.smtpHost,
    port: 465,
    secure: true, // use SSL
    auth: {
      user: user,
      pass: config.smtpPass
    }
  };
  const transporter = nodemailer.createTransport(smtpConfig);
  const mailOptions = {
    from: user,
    to: email,
    subject: subject,
    html: content
  };

  transporter.sendMail(mailOptions, (err) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json({success: true});
  });
});

module.exports = app;