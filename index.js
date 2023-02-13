const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const PORT = 5000;
app.use(express.json());

//app.use(cors());


app.get('/', (req, res) => {
   res.send('Hey this is my API running 🥳')
})

// Route to get all products
app.get("/get", (req, res) => {
   db.query("SELECT * FROM products", (err, result) => {
      if (err) {
         console.log(err)
      }
      res.send(result)
   });
});

// Route for creating a new product
app.post('/create', (req, res) => {

   const sku = req.body.sku;
   const name = req.body.name;
   const price = req.body.price;
   const size = req.body.size;
   const weight = req.body.weight;
   const dimensions = req.body.dimensions;
   const type = req.body.type;

   db.query("INSERT INTO products (SKU, Name, Price, Size, Weight, Dimensions, Type) VALUES (?,?,?,?,?,?,?)", [sku, name, price, size, weight, dimensions, type], (err, result) => {
      if (err) {
         console.log(err)
      }
      console.log(result)
   });
})

// Route to delete a product
app.post('/delete', (req, res) => {
   const SKU = req.body.SKU;

   db.query("DELETE FROM products WHERE SKU = ?", SKU, (err, result) => {
      if (err) {
         console.log(err)
      }
   })
})

app.listen(PORT, () => {
   console.log(`Server is running on ${PORT}`)
})

module.exports = app