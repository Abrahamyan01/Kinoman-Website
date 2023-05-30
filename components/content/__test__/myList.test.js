import React from 'react';
import { render } from '@testing-library/react';
import MyList from '../myList';
import '@testing-library/jest-dom';

describe('MyList', () => {
  it('отрисовывается заголовок, если он был прередан', () => {
    const { getByText } = render(<MyList title="My List" />);
    expect(getByText('My List')).toBeInTheDocument();
  });
    
  it('отрисовывается одна колонка, если количество итемов  меньше, чем itemsPerColumn', () => {
    const content = [
      { link: 'link1', content: 'item1' },
      { link: 'link2', content: 'item2' },
    ];
    const { container } = render(<MyList content={content} itemsPerColumn={3} />);
    expect(container.querySelectorAll('ul').length).toBe(1);
  });
  
  it('отрисовывается одна колонка, если количество итемов равно itemsPerColumn', () => {
    const content = [
      { link: 'link1', content: 'item1' },
      { link: 'link2', content: 'item2' },
      { link: 'link3', content: 'item3' },
    ];
    const { container } = render(<MyList content={content} itemsPerColumn={3} />);
    expect(container.querySelectorAll('ul').length).toBe(1);
  });

  it('отрисовывается несколько колонок, если количество итемов больше, чем itemsPerColumn', () => {
    const content = [
      { link: 'link1', content: 'item1' },
      { link: 'link2', content: 'item2' },
      { link: 'link3', content: 'item3' },
      { link: 'link4', content: 'item4' },

    ];
    const { container } = render(<MyList content={content} itemsPerColumn={2} />);
    expect(container.querySelectorAll('ul').length).toBe(2);
  });
});