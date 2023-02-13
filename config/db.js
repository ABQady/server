const mysql = require('mysql')
const db = mysql.createConnection('mysql://teqkyrb3l23iheinqp7a:pscale_pw_JLSpXzbNVZwIPgFBnTKIXFqyuELe5CtXeC3XrvXGH7G@eu-central.connect.psdb.cloud/products?ssl={"rejectUnauthorized":true}')

module.exports = db;