import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';
import Home from './Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
