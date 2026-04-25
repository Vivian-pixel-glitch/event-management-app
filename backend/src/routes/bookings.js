// routes/bookings.js
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Make sure this path is correct for your project

// POST /book-event
router.post('/book-event', async (req, res) => {
  // Destructure booking data from the request body
  const { name, email, phone, eventId, eventName, eventDate } = req.body;

  try {
    // Look for an existing user by email
    let user = await User.findOne({ email });

    if (!user) {
      // If user doesn't exist, create a new one
      user = new User({ name, email, phone, bookings: [] });
    }

    // Add the event booking to the user's bookings array
    user.bookings.push({
      eventId,
      eventName,
      date: eventDate,
      bookedAt: new Date(),
    });

    // Save the user document with the updated bookings
    await user.save();

    // Send a success response with the updated user info
    res.status(200).json({ message: 'Event booked successfully!', user });
  } catch (error) {
    console.error('Error booking event:', error);
    res.status(500).json({ error: 'Server error booking event' });
  }
});

module.exports = router;
