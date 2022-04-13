import React from 'react';
/* import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; */
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testes da página de Login', () => {
  it('Texto com a escrita "Login" está presente na tela', () => {
    renderWithRouter(<App />);
    const textLogin = getByRole('heading', { name: /Login/, level: 2 });
    expect(textLogin).toBeInTheDocument();
  });
});
