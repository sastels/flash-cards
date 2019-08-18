import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Progress from '../Progress';

afterEach(cleanup);

describe('<Progress />', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <Progress />
      </BrowserRouter>
    );
  });
});
