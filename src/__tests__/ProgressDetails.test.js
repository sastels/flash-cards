import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ProgressDetails from '../ProgressDetails';

afterEach(cleanup);

describe('<ProgressSection />', () => {
  it('renders without crashing', () => {
    render(<ProgressDetails match={{ params: { section: 'nouns' } }} />);
  });
});
