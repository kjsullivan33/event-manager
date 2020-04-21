/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import EventStyle from './styles/EventStyle';
import Button from './styles/Button';

const EventForm = ({ event, eventId, addEvent, updateEvent }) => {
  const [formData, updateForm] = useState(event);

  const handleSubmit = () => {
    console.log(formData);
    if (eventId) {
      updateEvent(formData);
    } else {
      addEvent(formData);
    }
  };

  const handleInputChange = (e) => {
    const { target } = e;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    updateForm({
      event: {
        ...formData.event,
        [name]: value,
      },
    });
  };

  console.log(formData);

  return (
    <EventStyle>
      <h2>{eventId ? 'Make Changes to Event' : 'New Event'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="event_type">
            <strong>Type:</strong>
            <input
              type="text"
              id="event_type"
              name="event_type"
              onChange={handleInputChange}
              value={event.event_type}
            />
          </label>
        </div>
        <div>
          <label htmlFor="event_date">
            <strong>Date:</strong>
            <input
              type="date"
              id="event_date"
              name="event_date"
              onChange={handleInputChange}
              value={event.event_date}
            />
          </label>
        </div>
        <div>
          <label htmlFor="title">
            <strong>Title:</strong>
            <textarea
              cols="30"
              rows="10"
              id="title"
              name="title"
              value={event.title}
            />
          </label>
        </div>
        <div>
          <label htmlFor="speaker">
            <strong>Speaker:</strong>
            <input
              type="text"
              id="speaker"
              name="speaker"
              onChange={handleInputChange}
              value={event.speaker}
            />
          </label>
        </div>
        <div>
          <label htmlFor="host">
            <strong>Host:</strong>
            <input
              type="text"
              id="host"
              name="host"
              onChange={handleInputChange}
              value={event.host}
            />
          </label>
        </div>
        <div>
          <label htmlFor="published">
            <strong>Publish:</strong>
            <input
              type="checkbox"
              id="published"
              name="published"
              onChange={handleInputChange}
              checked={event.published}
            />
          </label>
        </div>
        <div>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </EventStyle>
  );
};

EventForm.propTypes = {
  event: PropTypes.shape(),
  addEvent: PropTypes.func.isRequired,
  updateEvent: PropTypes.func.isRequired,
  eventId: PropTypes.number,
};

EventForm.defaultProps = {
  event: {
    event_type: '',
    event_date: '',
    title: '',
    speaker: '',
    host: '',
    published: false,
  },
  eventId: undefined,
};

export default EventForm;
