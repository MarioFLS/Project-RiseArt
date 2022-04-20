import PropTypes from 'prop-types';
import React from 'react';
import { saveArt } from '../service/saveStorage';
import '../css/Header.css';

function Header({ gallery, setGallery }) {
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
    const valueInput = event.target.value;
    valueInput.value = null;
  };
  return (
    <header>
      <h1>Nome Do Item</h1>
      <div className="send-img">
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
