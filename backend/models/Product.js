const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: { type: String, required: true },
  image: { type: String, required: true },
  name: { type: String, required: true },
  rating: {
    stars: { type: Number, required: true },
    count: { type: Number, required: true }
  },
  priceCents: { type: Number, required: true },
  keywords: [String],
  type: { type: String },
  sizeChartLink: { type: String }
});

module.exports = mongoose.model('Product', productSchema);
