const sms     = require("ali-sms");
const express = require("express");
const app     = express.Router();

const auth    = require("../auth");
const config  = require("./config");

app.use(auth);

const codeLen = 4; // the length of the check code
const generateSMSCode = () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let result = '';
  for (let i = 0; i < codeLen; i++) {
    result += arr[Math.floor(Math.random() * arr.length)].toString();
  }
  return result;
};

app.get('/send', (req, res) => {
  const phone = req.query.phone;
  if (!phone) {
    return res.json({success: false, msg: 'phone number is invalid'});
  }
  const code = generateSMSCode();
  const params = {
    accessKeyID       : config.accessKeyID,
    accessKeySecret   : config.accessKeySecret,
    paramString       : {code: code},
    recNum            : [phone],
    signName          : config.signName,
    templateCode      : config.templateCode,
  };
  sms(params, (err, result) => {
    if (err) {
      return res.json({success: false, msg: err});
    }
    const body = JSON.parse(result);
    if (body.Code === 'OK') {
      res.json({success: true, code: code});
    } else {
      res.json({success: false, msg: body});
    }
  });
});

module.exports = app;
