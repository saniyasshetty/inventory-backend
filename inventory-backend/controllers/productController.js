const Product = require('../models/product');

// CREATE
exports.createProduct = async (req, res) => {
  const { name, description, price, quantity } = req.body;
  const product = new Product({ name, description, price, quantity });
  await product.save();
  res.status(201).json(product);
};

// READ
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json(product);
};

// UPDATE
exports.updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(product);
};

// DELETE
exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
};
