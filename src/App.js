import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';
import Home from './Home';
import FlashCards from './FlashCards';
import Progress from './Progress';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/flash-cards" component={FlashCards} />
        <Route exact path="/progress" component={Progress} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
