import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../image/icon.png';
import '../css/Header.css';

function HeaderProfile() {
  const getUser = JSON.parse(localStorage.getItem('user'));

  return (
    <header>
      <Link to="/home">
        <img src={icon} alt="Icone da Marca" id="logotipo" />
      </Link>

      <div className="send-img">
        <Link to="/profile">
          <img
            id="image-user"
            src={getUser.imgProfile}
            alt="Imagem do usuário, leva a tela de pergil"
          />
        </Link>

      </div>
    </header>
  );
}

export default HeaderProfile;
