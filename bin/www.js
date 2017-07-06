const server = require('../server');
const port   = process.env.MICRO_SERVICE_PORT || 6679;
server.listen(port, () => console.log('micro service is running on', port));