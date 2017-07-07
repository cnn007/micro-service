# micro-service
some micro services for api server

### Run

* development: `npm start`
* deployment : `pm2 start bin/www.js --name 'micro-service'`

### Environment Variables

```
邮件相关
    |-- smtpHost: 邮件host，例如腾讯企业邮箱的smtpHost为：smtp.exmail.qq.com 
    |-- smtpUser: 发送者邮箱，例如 "market@xx.com"
    |-- smtpPass: 发送着邮箱密码
短信相关
    |-- ALI_SMS_ACCESSKEYID: 阿里云访问key
    |-- ALI_SMS_ACCESSKEYSECRET: 阿里云访问密钥
    |-- ALI_SMS_signName: 阿里云短信签名
    |-- ALI_SMS_templateCode: 阿里云短信模板
上传相关
    |-- ACESS_KEY_ID： 阿里云访问key
    |-- ACESS_KEY_SECRET： 阿里云访问密钥
    |-- OSS_BUCKET： 阿里云oss bucket名称，如：xxx-upload
    |-- OSS_REGION： 阿里云oss区域， 如：oss-cn-shanghai
```

### Documentation
https://github.com/tsq-nodejs/document

### Files

```
├── README.md
├── bin
│   └── www.js
├── middleware.js
├── package.json
├── public
├── routes
│   ├── auth.js
│   ├── email
│   │   ├── config.js
│   │   └── index.js
│   ├── sms
│   │   ├── config.js
│   │   └── index.js
│   ├── upload
│   │   ├── config.js
│   │   └── index.js
│   └── whitelist.json
├── server.js
├── socket.js
└── test
```

