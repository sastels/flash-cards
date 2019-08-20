import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FlashCards from '../FlashCards';

afterEach(cleanup);
describe('<FlashCards />', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <FlashCards match={{ params: { section: 'Math' } }} />
      </BrowserRouter>
    );
  });
});
