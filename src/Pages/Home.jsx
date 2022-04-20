import React, { useContext, useEffect, useState } from 'react';
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
      <form>
        <input type="file" accept="image/png, image/jpeg" onSubmit={addArt} />
        <button type="submit" onClick={addArt}>Enviar</button>
      </form>

      <div className="cards-main-container">
        {galleryonScreen.map((item, index) => (
          <div key={item[itemArr(index)].id} className="cards-container">
            {item
              .map(({ id, image }) => (
                <div key={id} className="card-image">
                  <img src={image} alt="a" />
                </div>
              )).reverse()}
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home;
