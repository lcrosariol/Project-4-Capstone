const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = require('./itemSchema');



const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    // lineItems: [lineItemSchema],
    isPaid: { type: Boolean, default: false },
}, {
    timestamps: true,
    toJSON: { virtuals: true }
});

 

orderSchema.virtual('orderId').get(function () {
    return this.id.slice(-6).toUpperCase();
});

orderSchema.statics.getCart = async function(userId) {
    return this.findOneAndUpdate(
    { user: userId, isPaid: false},
    { user: userId},
    { upsert: true, new: true }
    );
};


module.exports = mongoose.model('Order', orderSchema);