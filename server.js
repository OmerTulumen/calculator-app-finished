if(process.env.NODE_ENV) {
  console.log(process.env.NODE_ENV);
  require('dotenv').config({
   path: `${__dirname}/.env.${process.env.NODE_ENV},`
  });
} else {
  require('dotenv').config();
}

const app = require("./app");
const port = process.env.PORT || 3000;
console.log(port);
app.listen(port);
console.log("Server running (3000)");
