const path = require('path'); 

if(process.env.NODE_ENV) {
require('dotenv').config({ path: path.join(__dirname, '.env.production') });
} else {
require('dotenv').config();
}

const app = require("./app");
const port = process.env.PORT || 3000;
console.log(port);
app.listen(port);
console.log("Server running (3000)");
