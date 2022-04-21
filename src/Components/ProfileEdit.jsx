import PropTypes from 'prop-types';
import React from 'react';

function ProfileEdit({ name, email, image }) {
  const { nameUser, setNameUser } = name;
  const { emailUser, setEmailUser } = email;
  const { profileImage, setProfileImage } = image;
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
  return (
    <section className="section-profile">

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
}

ProfileEdit.propTypes = {
  email: PropTypes.shape({
    emailUser: PropTypes.string,
    setEmailUser: PropTypes.func,
  }).isRequired,
  image: PropTypes.shape({
    profileImage: PropTypes.string,
    setProfileImage: PropTypes.func,
  }).isRequired,
  name: PropTypes.shape({
    nameUser: PropTypes.string,
    setNameUser: PropTypes.func,
  }).isRequired,
};

export default ProfileEdit;
