import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders title paragraph', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Branch/i);
  expect(titleElement).toBeInTheDocument();
});


