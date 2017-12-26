const express = require('express');

const myRouterConfig = require('./routers/AppRouterConfig');
const app = express();
let portUse = process.env.port || 3000
myRouterConfig.configure(app);

app.listen(portUse, () => console.log('Example app listening on port 3000!'));