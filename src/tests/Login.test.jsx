/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
/* import userEvent from '@testing-library/user-event'; */
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste Página de Login', () => {
  it('Texto Login Estar Presente na tela', () => {
    renderWithRouter(<App />);
    const textLogin = screen.getByRole('heading', { level: 2, name: /Login/ });
    expect(textLogin).toBeInTheDocument();
  });
});
