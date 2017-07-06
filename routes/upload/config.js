module.exports = {
  accessKeyId       : process.env.ACESS_KEY_ID || '',
  accessKeySecret   : process.env.ACESS_KEY_SECRET || '',
  bucket            : process.env.OSS_BUCKET || '',
  region            : process.env.OSS_REGION || 'oss-cn-shanghai',
  folder            : process.env.OSS_FOLDER || ''
};