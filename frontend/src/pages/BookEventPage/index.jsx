import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import styles from './BookEventPage.module.css';

function BookEventsPage() {
    const navigate = useNavigate();
  

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    eventType: '',
    guests: '',
    date: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const token = localStorage.getItem('authToken'); 

    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, 
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      toast.success(data.message || 'Event booked successfully!');
      setFormData({
        fullName: '',
        email: '',
        eventType: '',
        guests: '',
        date: '',
        notes: '',
      });
      setTimeout(() => {
        navigate('/user');
      }, 4000);
    } else {
      toast.error(data.message || 'Something went wrong');
    }
  } catch (err) {
    toast.error('Failed to connect to server');
  }
};


  return (
    <div className={styles.bookEvents}>
      <h1>Book an Event</h1>
      <p className={styles.subtitle}>
        Fill in your details to reserve a spot or schedule an event with us.
      </p>

      <form className={styles.bookingForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <select
          name="eventType"
          value={formData.eventType}
          onChange={handleChange}
          required
        >
          <option value="">Select Event Type</option>
          <option value="wedding">Wedding</option>
          <option value="birthday">Birthday Party</option>
          <option value="conference">Conference</option>
          <option value="concert">Concert</option>
        </select>
        <input
          type="number"
          name="guests"
          placeholder="Number of Guests"
          value={formData.guests}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <textarea
          name="notes"
          placeholder="Additional Notes or Requests"
          rows="5"
          value={formData.notes}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Book Now</button>
      </form>

      <ToastContainer />
    </div>
  );
}

export default BookEventsPage;
