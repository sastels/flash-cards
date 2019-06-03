import React from 'react';
import { render, cleanup } from '@testing-library/react';
import FlashCards from '../FlashCards';

afterEach(cleanup);

describe('<FlashCards />', () => {
  it('renders without crashing', () => {
    render(<FlashCards />);
  });
});
