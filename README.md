# micro-service
some micro services for api server

### Run

* development: `npm start`
* deployment : `pm2 start bin/www.js --name 'micro-service'`

### Documentation
http://xxx.com

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

