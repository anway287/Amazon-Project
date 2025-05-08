const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET all products
router.get('/', async (req, res) => {
    try {
      console.log('GET /api/products hit');
      const products = await Product.find();
      console.log('Products found:', products.length);
      res.json(products);
    } catch (err) {
      console.error('Error fetching products:', err.message);
      res.status(500).json({ message: err.message });
    }
  });
  
// POST a new product
router.post('/', async (req, res) => {
  try {
    const product = new Product(req.body);
    const saved = await product.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
