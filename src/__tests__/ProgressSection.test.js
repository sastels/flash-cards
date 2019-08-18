import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ProgressSection } from '../ProgressSection';

afterEach(cleanup);

describe('<ProgressSection />', () => {
  it('renders without crashing', () => {
    render(<ProgressSection match={{ params: 'nouns' }} />);
  });
});
