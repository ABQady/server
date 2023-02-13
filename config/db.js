const mysql = require('mysql')
const db = mysql.createConnection({
   host: "eu-central.connect.psdb.cloud",
   user: "teqkyrb3l23iheinqp7a",
   password: "pscale_pw_JLSpXzbNVZwIPgFBnTKIXFqyuELe5CtXeC3XrvXGH7G",
   database: "products"
})

module.exports = db;