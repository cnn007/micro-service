const morgan        = require("morgan");
const express       = require("express");
const bodyParser    = require("body-parser");
const helmet        = require("helmet");
const compression   = require("compression");
const cors          = require("cors");
const fileUpload    = require("express-fileupload");


module.exports = (app) => {
  const env = process.env.NODE_ENV || 'development';
  if (env === 'development') {
    app.use(morgan('dev'));
  }
  if (env === 'production') {
    app.use(morgan('combined'));
  }
  app.set('json spaces', 2);
  app.use(express.static('public/'));
  app.use(cors());
  app.use(compression());
  app.use(helmet());
  app.use(fileUpload({ limits: { fileSize: 200 * 1024 * 1024 }})); // 200M
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
};