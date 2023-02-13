const mysql = require('mysql')
const db = mysql.createConnection({
   host: "localhost",
   user: "id20294009_root",
   password: "%Q!9kM~RcAiFiJiJ",
   database: "id20294009_products"
})

module.exports = db;