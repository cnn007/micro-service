module.exports = (req, res, next) => {
  const whiteList = require(__dirname + "/whitelist.json");
  const signature = req.query.signature;
  if (whiteList.indexOf(signature) === -1) {
    return res.status(403).json({success: false, msg: 'signature is invalid, please contact manager'});
  }
  next();
};