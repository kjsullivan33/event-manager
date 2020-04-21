import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Editor from './Editor';
import GlobalStyle from './styles/GlobalStyle';
import theme from '../theme';


const App = () => (
  <div>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Route path="/events/:id?" component={Editor} />
    </ThemeProvider>
  </div>
);

export default App;
