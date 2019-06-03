import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from '../Home';

afterEach(cleanup);

describe('<Home />', () => {
  it('renders without crashing', () => {
    render(
      <Router>
        <Home />
      </Router>
    );
  });
});
