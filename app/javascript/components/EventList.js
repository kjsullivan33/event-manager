/* eslint-disable comma-dangle */
import React from 'react';
import PropTypes from 'prop-types';

import NewEventButton from './NewEventButton';

import StyledLink from './styles/StyledLink';
import EventListStyle from './styles/EventListStyle';

const EventList = ({ events = [], activeId }) => {
  const sortedEvents = events.sort(
    (a, b) => new Date(b.event_date) - new Date(a.event_date)
  );
  return (
    <EventListStyle>
      <h2>Events</h2>
      <NewEventButton />
      <ul>
        {sortedEvents.map((event) => (
          <li key={event.id}>
            <StyledLink
              to={`/events/${event.id}`}
              active={event.id.toString() === activeId && activeId.toString()}
            >
              {event.event_date}
              {' - '}
              {event.event_type}
            </StyledLink>
          </li>
        ))}
      </ul>
    </EventListStyle>
  );
};

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object),
  activeId: PropTypes.string,
};

EventList.defaultProps = {
  events: [],
  activeId: undefined,
};

export default EventList;
