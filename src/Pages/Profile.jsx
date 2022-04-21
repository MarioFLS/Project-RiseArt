import React from 'react';
/* import { saveUser } from '../service/saveStorage'; */

function Profile() {
  const getUser = JSON.parse(localStorage.getItem('user'));
  return (
    <main>
      <div>
        <h2>Tela De Perfil</h2>
        <img
          id="image-user"
          src={getUser.imgProfile}
          alt="Imagem do usuário"
        />
        <h4>{getUser.name}</h4>
        <h4>{getUser.email}</h4>
        <button type="button">Editar Perfil</button>
      </div>
    </main>
  );
}

export default Profile;
