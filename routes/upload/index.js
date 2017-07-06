const OSS     = require('ali-oss').Wrapper;
const express = require("express");
const app     = express.Router();

const auth    = require("../auth");
const config  = require("./config");

app.use(auth);

app.post('/', (req, res) => {
  const client =  new OSS({
    accessKeyId     : config.accessKeyId,
    accessKeySecret : config.accessKeySecret,
    bucket          : config.bucket,
    region          : config.region
  });

  const upload = (item, cb) => {
    client.put(`${item.name}`, item.path).then(function (val) {
      if (val.res.status === 200) {
        cb(null, val);
      } else {
        cb('err');
      }
    });
  };

  if (!req.files) {
    return res.status(400).send('No files were uploaded.');
  }
  let file = req.files.file;
  const localPath = `${process.env.HOME}/upload/${file.name}`;
  file.mv(localPath, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    const item = {
      name: config.folder + '/' + file.name,
      path: localPath
    };
    upload(item, (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json(result);
    });
  });
});

module.exports = app;