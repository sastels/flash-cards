import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FlashCards from '../FlashCards';

afterEach(cleanup);
const handleGuess = jest.fn();
describe('<FlashCards />', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <FlashCards words={['a']} handleGuess={handleGuess} />
      </BrowserRouter>
    );
  });
});
