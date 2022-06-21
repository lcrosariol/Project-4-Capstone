const mongoose = require('mongoose');
// Ensure the model is processed by Mongoose (for populating plant queries)
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: { type: String, required: true },
  sortOrder: Number,
  //The sortOrder property allows us to determine the 
  //ordering of the categories for display and/or reporting 
  //purposes instead of having to rely on some other property, e.g., name.
});

module.exports = mongoose.model('Category', categorySchema);