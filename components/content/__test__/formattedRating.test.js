import { render } from '@testing-library/react'
import FormattedRating from '../formattedRating';
import { debug } from 'console';
import '@testing-library/jest-dom';


describe('FormattedRating', () => {
    it('отрисовывается значение', () => {
      const props = {
        rating: 4.5,
        smallDecimal: false,
        color: '#000',
      };
      const { getByText } = render(<FormattedRating {...props} />);
      debug()
      expect(getByText(/4\s*,\s*5/)).toBeInTheDocument();
    });
  
    it('отрисовывается значение с малым числом после точки, если smallDecimal = true', () => {
      const props = {
        rating: 4.5,
        smallDecimal: true,
        color: '#000',
      };
      const { container } = render(<FormattedRating {...props} />);
      expect(container.querySelector('span')).toHaveStyle({ fontSize: '0.75em' });
    });
  
    it('ничего не отрисовывется, если rating = undefined', () => {
      const props = {
        rating: undefined,
        smallDecimal: false,
        color: '#000',
      };
      const { container } = render(<FormattedRating {...props} />);
      expect(container.firstChild).toBeNull();
    });
  });