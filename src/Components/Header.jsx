import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { saveArt } from '../service/saveStorage';
import icon from '../image/icon.png';
import '../css/Header.css';

function Header({ gallery, setGallery }) {
  const getUser = JSON.parse(localStorage.getItem('user'));
  const addArt = (event) => {
    event.preventDefault();
    const imageFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        const id = gallery.at(-1).id + 1;
        saveArt(id, reader.result);
        setGallery((preves) => ([...preves, { id, image: reader.result }]));
      }
    };
    reader.readAsDataURL(imageFile);
  };
  return (
    <header>
      <Link to="/home">
        <img src={icon} alt="Icone da Marca" id="logotipo" />
      </Link>

      <div className="send-img">
        <Link to="/profile">
          <img
            id="image-user"
            src={getUser.imgProfile || ''}
            alt="Imagem do usuário, leva a tela de pergil"
          />
        </Link>
        <label htmlFor="upload-img" className="label-send-img">
          <input
            type="file"
            id="upload-img"
            accept="image/png, image/jpeg"
            onChange={addArt}
          />
          <i className="large material-icons">add_a_photo</i>
          <p>Enviar</p>
        </label>
      </div>
    </header>
  );
}

Header.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  setGallery: PropTypes.func.isRequired,
};

export default Header;
