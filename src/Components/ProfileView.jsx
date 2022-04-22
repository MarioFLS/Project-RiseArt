import React from 'react';

function ProfileView() {
  const getUser = JSON.parse(localStorage.getItem('user'));
  return (
    <section className="section-profile">

      <img
        id="user-profile-image"
        src={getUser.imgProfile}
        alt="Imagem do usuário"
      />
      <div className="info-user">
        <h3>Nome do Usuário</h3>
        <h4>{getUser.name}</h4>
      </div>

      <div className="info-user">
        <h3>Email do Usuário</h3>
        <h4>{getUser.email}</h4>
      </div>

    </section>
  );
}

export default ProfileView;
