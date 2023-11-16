const fs = require('fs');

module.exports = function() {
  const jsonString = fs.readFileSync("./users.json", "utf8")

  return JSON.parse(jsonString)
}