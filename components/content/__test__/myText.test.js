import React from 'react';
import { render } from '@testing-library/react';
import MyText from '../myText';
import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/react';

describe('myText', () => {
  test('отрисовывается текст', () => {
    const { getByText } = render(<MyText text="Hello World" />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });

  test('применяется цвет', () => {
    const { getByText } = render(<MyText text="Hello World" color="red" />);
    expect(getByText('Hello World')).toHaveStyle('color: red');
  });

  test('применяется начертание', () => {
    const { getByText } = render(<MyText text="Hello World" weight={700} />);
    expect(getByText('Hello World')).toHaveStyle('font-weight: 700');
  });

  test('применяется размер', () => {
    const { getByText } = render(<MyText text="Hello World" size="2rem" />);
    expect(getByText('Hello World')).toHaveStyle('font-size: 2rem');
  });

  test('применяется высота строки', () => {
    const { getByText } = render(<MyText text="Hello World" line="30px" />);
    expect(getByText('Hello World')).toHaveStyle('line-height: 30px');
  });

  test('применяется ховер', () => {
    const { getByText } = render(<MyText text="Hello World" hover="rgba(255, 255, 255, 0.48);" />);
    const textElement = getByText('Hello World');
    fireEvent.mouseOver(textElement);
    expect(textElement).toHaveStyle('color: rgba(255, 255, 255, 0.48);');
  });
});