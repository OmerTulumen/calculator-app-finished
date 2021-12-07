
  require('dotenv').config({ path: path.join(__dirname, '.env') });
const app = require("./app");
const port = process.env.PORT || 3000;
console.log(port);
app.listen(port);
console.log("Server running (3000)");
