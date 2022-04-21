import React from 'react';

function ProfileView() {
  const getUser = JSON.parse(localStorage.getItem('user'));
  return (
    <section className="section-profile">

      <img
        id="image-user"
        src={getUser.imgProfile}
        alt="Imagem do usuário"
      />
      <h4>{getUser.name}</h4>
      <h4>{getUser.email}</h4>
    </section>
  );
}

export default ProfileView;
