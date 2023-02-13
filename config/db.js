const mysql = require('mysql')
const db = mysql.createConnection({
   host: "eu-central.connect.psdb.cloud",
   user: "ozezvapjpsc2c5rfxz08",
   password: "pscale_pw_ojEwaGldlgx7vYOeytVebLCjaYtPdFFRQxyeRXD3X6o",
   database: "products"
})

module.exports = db;