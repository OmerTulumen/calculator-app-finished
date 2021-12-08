if(process.env.NODE_ENV) {
require("dotenv").config();
} else {
require('dotenv').config();
}

const app = require("./app");
const port = process.env.PORT || 3000;
console.log(port);
app.listen(port);
console.log("Server running ${port}");
