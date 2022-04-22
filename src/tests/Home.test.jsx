/* eslint-disable no-undef */
import React from 'react';
import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { saveUser } from '../service/saveStorage';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste Página Home', () => {
  it('Texto Esta Presente na tela', () => {
    const { history } = renderWithRouter(<App />);
    const { pathname } = history.location;
    expect(pathname).toBe('/');

    saveUser('Usuário', 'email@teste.com');
    userEvent.click(screen.getByRole('button', { name: /Login/ }));
    userEvent.click(screen.getByRole('button', { name: /Login/ }));
    userEvent.click(screen.getByRole('button', { name: /Login/ }));
    expect(pathname).toBe('/home');
  });
});
