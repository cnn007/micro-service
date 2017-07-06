const express       = require("express");
const http          = require("http");
const app           = express();
const server        = http.Server(app);
const middleware    = require("./middleware");
const email         = require("./routes/email");
const sms           = require("./routes/sms");
const upload        = require("./routes/upload");
const socket        = require("./socket");

socket(server);
middleware(app);

app.use('/sms', sms);
app.use('/email', email);
app.use('/upload', upload);

app.get('/ping', (req, res) => res.send('pong'));

app.use((req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
  console.error('err:', err);
  res.sendStatus(500);
});

module.exports = server;