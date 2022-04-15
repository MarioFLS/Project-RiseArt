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

  it('Input de name, email e senha estão presentes', () => {
    renderWithRouter(<App />);
    const inputName = screen.getByPlaceholderText('Digite seu Nome');
    const inputEmail = screen.getByPlaceholderText('Digite seu Email');
    const inputPassword = screen.getByPlaceholderText('Digite sua senha');
    expect(inputName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
  });
});
