/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from './styles/Button';
import EventStyle from './styles/EventStyle';

const Event = ({ event, eventId, deleteEvent }) => (
  <EventStyle>
    {eventId && (
      <div>
        <h2>
          {event.event_date}
          {' - '}
          {event.event_type}
        </h2>
        <ul>
          <li>
            <strong>Type:</strong> {event.event_type}
          </li>
          <li>
            <strong>Date:</strong> {event.event_date}
          </li>
          <li>
            <strong>Title:</strong> {event.title}
          </li>
          <li>
            <strong>Speaker:</strong> {event.speaker}
          </li>
          <li>
            <strong>Host:</strong> {event.host}
          </li>
          <li>
            <strong>Published:</strong> {event.published ? 'yes' : 'no'}
          </li>
        </ul>
        <Link to={`/events/${event.id}/edit`}>Edit</Link>
        <Button onClick={() => deleteEvent(eventId)}>Delete Event</Button>
      </div>
    )}
  </EventStyle>
);

Event.propTypes = {
  event: PropTypes.shape(),
  eventId: PropTypes.string,
  deleteEvent: PropTypes.func.isRequired,
};

Event.defaultProps = {
  event: undefined,
  eventId: undefined,
};

export default Event;
