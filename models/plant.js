const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plantSchema = new Schema(
    {
    // A plant belongs to a user
    user: { type: Schema.Types.ObjectId, ref: "User" },
    },
    {
    toJSON: { virtuals: true },
    // Include virtuals when doc is serialized to JSON
    }
);
// statics are callable on the model, not an instance (document)
plantSchema.statics.getCart = async function(userId) {
  // 'this' is bound to the model (don't use an arrow function)
  // return the promise that resolves to a cart (the user's unpaid order)
    return this.findOneAndUpdate(
    // query
    { user: userId },
    // update - in the case the order (cart) is upserted
    { upsert: true, new: true }
    // upsert option creates the doc if it doesn't exist!
    //Upserting in database means to insert (create) a record/document if it doesn't already exist when attempting an update.
    );
};

module.exports = mongoose.model('Plant', plantSchema);