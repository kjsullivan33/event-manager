/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkBox = styled.div`
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  background: ${(props) => (props.active ? 'rgba(0, 0, 0, 0.2)' : '')}
`;

const LinkStyling = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme.primary};
  &:hover {
    color: ${(props) => props.theme.secondary};
  }
`;

const StyledLink = ({ active, ...props }) => (
  <LinkBox active={active}>
    <LinkStyling {...props} />
  </LinkBox>
);

export default StyledLink;
