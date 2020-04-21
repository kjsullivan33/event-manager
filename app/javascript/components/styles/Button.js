import styled from 'styled-components';

const Button = styled.button`
  color: ${(props) => props.theme.background};
  cursor: pointer;
  font-size: 1.2rem;
  background: ${(props) => props.theme.primary};
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px rgba(255, 255, 255, 0.1);
  outline: none;
  &:hover {
    background: ${(props) => props.theme.secondary};
  }
`;

export default Button;
