import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { FlashCards } from '../FlashCards';

afterEach(cleanup);
const handleGuess = jest.fn();
describe('<FlashCards />', () => {
  it('renders without crashing', () => {
    render(<FlashCards words={['a']} handleGuess={handleGuess} />);
  });
});
