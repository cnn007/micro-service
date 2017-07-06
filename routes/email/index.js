const email   = require("smpt-mail");
const marked  = require("marked");
const express = require("express");
const app     = express.Router();

const auth    = require("../auth");
const config  = require("./config");

app.use(auth);

app.post('/', (req, res) => {
  const body = req.body;
  let configEmail = {
    smtpHost: config.smtpHost,
    smtpUser: config.smtpUser,
    smtpPass: config.smtpPass,
    from: config.smtpUser,
    to: body.to,
    cc: body.cc,
    subject: body.title,
    htmlStr: marked(body.context || ''),
    htmlContext: {}
  };
  if (body.hasOwnProperty('htmlContext')) {
    configEmail.htmlStr = body.context;
    configEmail.htmlContext = body.htmlContext;
  }
  email(configEmail, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({success: false});
    }
    return res.json({success: true});
  });
});

module.exports = app;