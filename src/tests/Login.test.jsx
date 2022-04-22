/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import icon from '../image/icon.png';

describe('Teste Página de Login', () => {
  it('Logo Esta Presente na tela', () => {
    renderWithRouter(<App />);
    const logoImage = screen.getByRole('img', { name: 'Icone do Site' });
    expect(logoImage).toBeInTheDocument();
    expect(logoImage.src).toBe(`http://localhost/${icon}`);
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
    const inValidEmail = 'email-teste.com';
    const validEmail = 'email@teste.com';
    const password = '123456';

    const inputName = screen.getByPlaceholderText('Digite seu Nome');
    const inputEmail = screen.getByPlaceholderText('Digite seu Email');
    const inputPassword = screen.getByPlaceholderText('Digite sua senha');
    const buttonLogin = screen.getByRole('button', { name: /Login/ });

    expect(buttonLogin).toBeInTheDocument();
    expect(buttonLogin).toBeDisabled();

    userEvent.type(inputName, name);
    userEvent.type(inputEmail, inValidEmail);
    userEvent.type(inputPassword, password);

    expect(buttonLogin).toBeDisabled();

    userEvent.type(inputEmail, validEmail);
    expect(buttonLogin).not.toBeDisabled();

    userEvent.click(buttonLogin);

    const { pathname } = history.location;

    expect(pathname).toBe('/home');
  });
});
