// // src/routes/event.js
// const express = require('express');
// const Event = require('../models/Event');
// const { verifyToken } = require('../middleware/verifyToken');

// const router = express.Router();

// // Create event (authenticated)
// router.post('/', verifyToken, async (req, res) => {
//   try {
//     const newEvent = new Event(req.body);
//     await newEvent.save();
//     res.status(201).json({ message: 'Event created successfully' });
//   } catch (err) {
//     res.status(500).json({ message: 'Event creation failed', error: err.message });
//   }
// });

// // Get all events (public)
// router.get('/', async (req, res) => {
//   try {
//     const events = await Event.find();
//     res.json(events);
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to fetch events' });
//   }
// });

// module.exports = router;





// src/routes/event.js
const express = require('express');
const Event = require('../models/Event');
const { verifyToken } = require('../middleware/verifyToken');

const router = express.Router();

// Create event (authenticated)
router.post('/', verifyToken, async (req, res) => {
  try {
    console.log("📥 Incoming event data:", req.body);
    console.log("👤 User from token:", req.user);

    const newEvent = new Event({
      ...req.body,
      user: req.user.id,
    });

    await newEvent.save();
    res.status(201).json({ message: 'Event booked successfully' });
  } catch (err) {
    console.error("❌ Event booking error:", err);
    res.status(500).json({ message: 'Event booking failed', error: err.message });
  }
});


// Get all events (public)
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch events' });
  }
});

// ✅ Get events booked by the logged-in user
router.get('/user', verifyToken, async (req, res) => {
  try {
    const events = await Event.find({ user: req.user.id }); // filter by user
    res.json({ events });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch user events', error: err.message });
  }
});

module.exports = router;
