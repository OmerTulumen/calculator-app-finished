if(process.env.NODE_ENV) {
require("dotenv").config({ path: __dirname + `/../.env.production` });
} else {
require('dotenv').config();
}

const app = require("./app");
const port = process.env.PORT || 3000;
console.log(port);
app.listen(port);
console.log("Server running (3000)");
