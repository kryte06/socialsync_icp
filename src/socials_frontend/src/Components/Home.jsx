import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { Button, Icon, Label } from 'semantic-ui-react';
import { socials_backend } from 'declarations/socials_backend';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState(""); // State to store event name

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Fetch event count and event name asynchronously
        const eventCount = await socials_backend.getEventCount();
        const eventName = await socials_backend.getEventName();

        const fetchedEvents = [];
        for (let i = 1; i <= eventCount; i++) {
          fetchedEvents.push({ eventId: i, eventName: eventName, likes: 0 }); // Include eventName in each event object
        }
        setEvents(fetchedEvents);
        setEventName(eventName); // Update event name state
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  const handleJoinEvent = async (eventId) => {
    try {
      const userName = prompt('Please enter your name:');
      if (userName) {
        await socials_backend.joinEvent(eventId, userName);
        alert(`${userName} joined event with ID ${eventId}`);
      } else {
        alert('Please enter your name to join the event.');
      }
    } catch (error) {
      console.error('Error joining event:', error);
    }
  };

  const handleLikeEvent = (index) => {
    const updatedEvents = [...events];
    updatedEvents[index].likes++;
    setEvents(updatedEvents);
    const sortedEvents = updatedEvents.sort((a, b) => b.likes - a.likes);
    setEvents(sortedEvents);
  };

  return (
    <div>
      {events.map((event, index) => (
        <div key={index} style={{ marginTop: '10px' }}>
          <Card
            title={event.eventName} // Set the event name as the title of the Card
            bordered={false}
            style={{
              width: 1230,
              background: '#d5f4e6',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button secondary onClick={() => handleJoinEvent(event.eventId)}>Join Event</Button>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button secondary onClick={() => handleLikeEvent(index)}>
                  <Icon name='like' />
                  upvote
                </Button>
                <Label basic color='red' pointing='left'>
                  {event.likes}
                </Label>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Home;
