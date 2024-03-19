import React, { useState } from 'react';
import './Style/styles.css';

function App() {
  const [eventData, setEventData] = useState({
    eventName: '',
    eventDate: '',
    eventLocation: '',
    eventDescription: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with eventData, like submitting to a server
    console.log(eventData);
  };

  return (
    <div className="App">
      <h1>Event Details Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name of Event:</label>
          <input type="text" name="eventName" value={eventData.eventName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Date of Event:</label>
          <input type="date" name="eventDate" value={eventData.eventDate} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input type="text" name="eventLocation" value={eventData.eventLocation} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea name="eventDescription" value={eventData.eventDescription} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;