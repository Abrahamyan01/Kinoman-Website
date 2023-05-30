import React from 'react';
import { render } from '@testing-library/react';
import TileItem from '../tileItem';
import '@testing-library/jest-dom';

describe('TileItem', () => {
  test('отрисовывается текст', () => {
    const { getByText } = render(<TileItem text="Hello World" />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });

  test('отрисловывается иконка', () => {
    const icon = <div data-testid="icon">Icon</div>;
    const { getByTestId } = render(<TileItem text="Hello World" icon={icon} />);
    expect(getByTestId('icon')).toBeInTheDocument();
  });

  test('применяется ширина', () => {
    const { getByText } = render(
      <TileItem text="Hello World" width="200px" />
    );
    expect(getByText('Hello World').parentElement).toHaveStyle('width: 200px');
  });
});