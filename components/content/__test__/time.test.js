import React from 'react';
import { render } from '@testing-library/react';
import Time from '../time';
import '@testing-library/jest-dom';

describe('Time', () => {
  test('отрисовывается дата в корректном формате', () => {
    const { getByText } = render(<Time time="2022-12-31T23:59:59.999Z" />);
    expect(getByText('1 января 2023')).toBeInTheDocument();
  });
});