const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String, // or use Firebase UID if using Firebase
  events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }],
});
const ownerId = 'PUT_OWNER_ID_HERE';

module.exports = mongoose.model('Owner', ownerSchema);
