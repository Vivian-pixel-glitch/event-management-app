const mongoose = require('mongoose');  // 👈 you forgot this

const eventSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  eventType: { type: String, required: true },
  guests: { type: Number, required: true },
  date: { type: String, required: true },
  notes: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

  // make this optional if not used
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Owner', required: false },
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);

