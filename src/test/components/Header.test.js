import React from 'react';
import { render } from '@testing-library/react';
import Header from '../../components/Header';

describe('Header Component', () => {
    it('renders the Navbar with the correct brand text', () => {
      const { getByText } = render(<Header />);
      const brandElement = getByText('Gerson Estrada');
      expect(brandElement).toBeInTheDocument();
    });
  
    it('renders the Navbar with the correct background color', () => {
      const { container } = render(<Header />);
      const navbar = container.querySelector('.navbar.bg-primary');
      expect(navbar).toBeInTheDocument();
    });
  
    it('renders the Navbar inside a Container', () => {
      const { container } = render(<Header />);
      const containerElement = container.querySelector('.container');
      expect(containerElement).toBeInTheDocument();
    });
  
    it('matches the snapshot', () => {
      const { container } = render(<Header />);
      expect(container).toMatchSnapshot();
    });
});
  