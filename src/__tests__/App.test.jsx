import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('App Component', () => {
  it('deve renderizar a aplicação inteira sem erros', () => {
    render(<App />);

    // Verifica presença de seções principais
    expect(screen.getByRole('banner')).toBeInTheDocument(); // Header
    expect(screen.getByRole('main')).toBeInTheDocument(); // Main container
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // Footer
  });
});
