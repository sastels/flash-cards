import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';
import Home from './Home';
import FlashCards from './FlashCards';
import Progress from './Progress';
import ProgressSection from './ProgressSection';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/flash-cards"
          // eslint-disable-next-line react/jsx-props-no-spreading
          render={props => <FlashCards {...props} />}
        />
        <Route exact path="/progress" component={Progress} />
        <Route path="/progress/:section" component={ProgressSection} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
