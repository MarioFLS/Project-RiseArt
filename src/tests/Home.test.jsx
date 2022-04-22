/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { saveUser } from '../service/saveStorage';
import gallery from '../gallery';
import renderWithRouter from './renderWithRouter';
import ArtProvider from '../context/ArtProvider';
import Home from '../Pages/Home';

describe('Teste Página Home', () => {
  beforeEach(() => {
    saveUser('Usuário', 'email@teste.com');
    renderWithRouter(
      <ArtProvider>
        <Home />
      </ArtProvider>,
    );
  });

  it('Texto Esta Presente na tela', () => {
    const textHome = screen.getByText(/home/i);
    expect(textHome).toBeInTheDocument();
  });

  it('Imagens estão presentes na tela e imagens podem ser adicionadas', () => {
    gallery.forEach(({ name, image }) => {
      const images = screen.getByAltText(`Imagem de ${name}`);
      expect(images).toBeInTheDocument();
      expect(images.src).toBe(image);
    });

    const containerImages = screen.getAllByTestId('div-cards');
    expect(containerImages).toHaveLength(15);

    const images0 = screen.getAllByTestId('images-0');
    const images1 = screen.getAllByTestId('images-1');
    const images2 = screen.getAllByTestId('images-2');
    expect(images0).toHaveLength(5);
    expect(images1).toHaveLength(5);
    expect(images2).toHaveLength(5);
  });

  it('Adicionar Imagem', async () => {
    const buttonSend = screen.getByTestId('label-send');
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });

    userEvent.upload(buttonSend, file);
    expect(buttonSend.files[0]).toStrictEqual(file);
    expect(buttonSend.files.item(0)).toStrictEqual(file);
    expect(buttonSend.files).toHaveLength(1);
  });
});
