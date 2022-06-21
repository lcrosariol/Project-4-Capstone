const Plant = require('../../models/plant');

module.exports = {
  list,
  addToList,
};

// A list is the unpaid plant for a user (list is now a list of plants)
async function list(req, res) {
  const list = await Plant.getList(req.user._id);
  // The promise resolves to the document, which we already have
  // in the list variable, so no need to create another variable...
  res.json(list);
}

// Add an item to the list(adds plant to list)
async function addToList(req, res) {
  const list = await Plant.getList(req.user._id);
  // The promise resolves to the document, which we already have
  // in the list variable, so no need to create another variable...
  await list.addItemToList(req.params.id);
  res.json(list);
}
