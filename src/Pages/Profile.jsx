import React, { useEffect, useState } from 'react';
import { saveUser } from '../service/saveStorage';
/* import imageUser from '../image/imageUser.webp'; */
import '../css/Profile.css';

function Profile() {
  const getUser = JSON.parse(localStorage.getItem('user'));
  const [nameUser, setNameUser] = useState(getUser.name);
  const [emailUser, setEmailUser] = useState(getUser.email);
  const [profileImage, setProfileImage] = useState(getUser.imgProfile);
  const [isEdit, setIsEdit] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validateEmail.test(emailUser) && nameUser.length >= 3) {
      return setIsDisabled(false);
    }
    return setIsDisabled(true);
  }, [nameUser, emailUser]);

  const addArt = (event) => {
    event.preventDefault();
    const imageFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImage(reader.result);
      }
    };
    reader.readAsDataURL(imageFile);
  };
  const editProfileItems = () => {
    setIsEdit(!isEdit);
    saveUser(nameUser, emailUser, profileImage);
  };

  const editUserProfile = () => (
    <section className="section-profile">
      <h2>Tela De Perfil</h2>
      <label htmlFor="upload-img" className="label-edit-profile">
        <input
          type="file"
          id="upload-img"
          accept="image/png, image/jpeg"
          onChange={addArt}
        />
        <img
          id="image-user"
          src={profileImage}
          alt="Imagem do usuário"
        />
      </label>

      <input
        type="text"
        value={nameUser}
        onChange={({ target }) => setNameUser(target.value)}
        placeholder="Digite Seu Nome"
      />
      <input
        type="text"
        value={emailUser}
        onChange={({ target }) => setEmailUser(target.value)}
        placeholder="Digite Seu novo Email"
      />
    </section>
  );

  return (
    <main>
      <div>
        {isEdit ? editUserProfile() : (
          <section className="section-profile">
            <h2>Tela De Perfil</h2>
            <img
              id="image-user"
              src={getUser.imgProfile}
              alt="Imagem do usuário"
            />
            <h4>{getUser.name}</h4>
            <h4>{getUser.email}</h4>
          </section>
        )}
        <button
          disabled={isDisabled}
          onClick={editProfileItems}
          type="button"
        >
          Editar Perfil
        </button>
      </div>
    </main>
  );
}

export default Profile;
