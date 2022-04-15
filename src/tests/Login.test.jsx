/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  it('Se o botão de Login Redireciona para página Home', () => {
    const { history } = renderWithRouter(<App />);
    const name = 'Usuário';
    const email = 'email@teste.com';
    const password = '123456';

    const inputName = screen.getByPlaceholderText('Digite seu Nome');
    const inputEmail = screen.getByPlaceholderText('Digite seu Email');
    const inputPassword = screen.getByPlaceholderText('Digite sua senha');
    const buttonLogin = screen.getByRole('button', { name: /Login/ });

    expect(buttonLogin).toBeInTheDocument();
    expect(buttonLogin).toBeDisabled();

    userEvent.type(inputName, name);
    userEvent.type(inputEmail, email);
    userEvent.type(inputPassword, password);

    expect(buttonLogin).not.toBeDisabled();

    userEvent.click(buttonLogin);

    const { pathname } = history.location;

    expect(pathname).toBe('/home');
  });
});
