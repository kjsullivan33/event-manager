import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body,
  html,
  div,
  blockquote,
  img,
  label,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  ul,
  ol,
  li,
  dl,
  dt,
  dd,
  form,
  a,
  fieldset,
  input,
  th,
  td {
    margin: 0;
    padding: 0;
  }

  ul,
  ol {
    list-style: none;
  }

  body {
    font-family: Roboto;
    font-size: 16px;
    color:  ${(props) => props.theme.text};
    line-height: 28px;
    background:  ${(props) => props.theme.background};
  }
`;

export default GlobalStyle;
