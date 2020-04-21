import styled from 'styled-components';

const HeaderStyle = styled.header`
  background: ${(props) => props.theme.header};
  padding: 1.6rem;
  display: flex;
  justify-content: space-between;
`;

export default HeaderStyle;
