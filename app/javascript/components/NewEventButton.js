import React from 'react';
import { Link } from 'react-router-dom';
import Button from './styles/Button';

const NewEventButton = () => (
  <Link to="/events/new">
    <Button type="button">Create a New Event</Button>
  </Link>
);

export default NewEventButton;
