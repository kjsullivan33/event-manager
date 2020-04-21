import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import EventList from './EventList';
import Event from './Event';
import EventForm from './EventForm';

import EditorSection from './styles/EditorSection';

class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: null,
    };
    this.addEvent = this.addEvent.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
    this.updateEvent = this.updateEvent.bind(this);
  }

  componentDidMount() {
    axios
      .get('/api/events.json')
      .then((response) => this.setState({ events: response.data }))
      .catch((error) => {
        console.log(error);
      });
  }

  addEvent(newEvent) {
    console.log(newEvent);
    axios
      .post('/api/events.json', newEvent)
      .then((response) => {
        alert('Event Added!');
        const savedEvent = response.data;
        this.setState((prevState) => ({
          events: [...prevState.events, savedEvent],
        }));
        window.location.href = `/events/${savedEvent.id}`;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteEvent(eventId) {
    console.log(eventId);
    const sure = window.confirm('Are you sure?');
    if (sure) {
      axios
        .delete(`/api/events/${eventId}.json`)
        .then((response) => {
          if (response.status === 204) {
            alert('Event deleted');
            window.location.href = '/events';

            const { events } = this.state;
            this.setState({
              events: events.filter((event) => event.id !== eventId),
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  updateEvent(updatedEvent) {
    axios
      .put(`/api/events/${updatedEvent.id}.json`, updatedEvent)
      .then(() => {
        alert('Event updated');
        const { events } = this.state;
        const idx = events.findIndex((event) => event.id === updatedEvent.id);
        events[idx] = updatedEvent;
        window.location.href = `/events/${updatedEvent.id}`;
        this.setState({ events });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { events } = this.state;
    if (events === null) return null;

    const { match } = this.props;
    const eventId = match.params.id;
    const event = events.find((e) => e.id === Number(eventId));

    return (
      <div>
        <Header />
        <EditorSection>
          <EventList events={events} activeId={eventId} />
          <Switch>
            <Route
              exact
              path="/events/new"
              component={() => <EventForm addEvent={this.addEvent} />}
            />
            <Route
              exact
              path="/events/:id/edit"
              component={() => (
                <EventForm
                  event={event}
                  updateEvent={this.updateEvent}
                  eventId={eventId}
                />
              )}
            />
            <Route
              path="/events/:id"
              component={() => (
                <Event
                  event={event}
                  eventId={eventId}
                  deleteEvent={this.deleteEvent}
                />
              )}
            />
          </Switch>
        </EditorSection>
      </div>
    );
  }
}

Editor.propTypes = {
  match: PropTypes.shape(),
};

Editor.defaultProps = {
  match: undefined,
};

export default Editor;
