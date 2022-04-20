import React, { useContext, useEffect, useState } from 'react';
import ListGallery from '../Components/ListGallery';
import ArtContext from '../context/ArtContext';
import '../css/Home.css';
import { saveArt } from '../service/saveStorage';

function Home() {
  const { galleryObj } = useContext(ArtContext);
  const [galleryonScreen, setGalleryonScreen] = useState([]);
  const [gallery, setGallery] = useState(galleryObj);

  const itemArr = (index) => Math.floor(index / 3);

  useEffect(() => {
    const getArts = JSON.parse(localStorage.getItem('arts'));
    if (getArts) {
      setGallery([...gallery, ...getArts]);
    }
  }, []);

  useEffect(() => {
    const galleryArr = [];
    gallery.forEach((galleryItens, index) => {
      if (index % 3 === 0) { galleryArr.push([]); }
      galleryArr[itemArr(index)] = [...galleryArr[itemArr(index)], galleryItens];
    });
    setGalleryonScreen(galleryArr.reverse());
  }, [setGalleryonScreen, gallery, setGallery]);

  const addArt = (event) => {
    event.preventDefault();
    const imageFile = event.target.parentNode.firstChild.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        const id = gallery.at(-1).id + 1;
        saveArt(id, reader.result);
        setGallery((preves) => ([...preves, { id, image: reader.result }]));
      }
    };
    reader.readAsDataURL(imageFile);
    const valueInput = event.target.parentNode.firstChild;
    valueInput.value = null;
  };
  return (
    <main className="main-container">
      <h1>Home</h1>
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

      <ListGallery onScreen={galleryonScreen} />
    </main>
  );
}

export default Home;
