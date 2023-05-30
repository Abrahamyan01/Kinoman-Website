import React from 'react';
import { render } from '@testing-library/react';
import Medallion from '../medallion';
import '@testing-library/jest-dom';

describe('Medallion', () => {
  test('отрисовывается изображение, если оно было передано', () => {
    const { getByAltText } = render(<Medallion image="/image.jpg" />);
    expect(getByAltText('фото актера')).toBeInTheDocument();
  });

  test('отрисовывется зеленый фон, если рейтинг больше 7', () => {
    const { getByText } = render(<Medallion rating={8} />);
    expect(getByText('8').parentElement).toHaveStyle('background-color: green');
  });

  test('отрисовывется серый фон, если рейтинг 5 - 7', () => {
    const { getByText } = render(<Medallion rating={6} />);
    expect(getByText('6').parentElement).toHaveStyle('background-color: grey');
  });

  test('отрисовывется красный фон, если рейтинг меньше 5', () => {
    const { getByText } = render(<Medallion rating={4} />);
    expect(getByText('4').parentElement).toHaveStyle('background-color: red');
  });
});