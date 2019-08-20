import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';
import Home from './Home';
import FlashCards from './FlashCards';
import Progress from './Progress';
import ProgressDetails from './ProgressDetails';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/flash-cards/:area" component={FlashCards} />
        <Route exact path="/progress" component={Progress} />
        <Route path="/progress-details/:section" component={ProgressDetails} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
