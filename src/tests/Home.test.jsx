/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import { saveUser } from '../service/saveStorage';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste Página Home', () => {
  it('Texto Esta Presente na tela', () => {
    const { history } = renderWithRouter(<App />);

    saveUser('Usuário', 'email@teste.com');
    history.push('/home');
    expect(screen.getByText(/home/)).toBeInTheDocument();
  });
});
