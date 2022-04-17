import React, { useContext, useEffect, useState } from 'react';
import ArtContext from '../context/ArtContext';
import '../css/Home.css';

function Home() {
  const { galleryObj } = useContext(ArtContext);
  const [galleryonScreen, setGalleryonScreen] = useState([]);

  const itemArr = (index) => Math.floor(index / 3);

  useEffect(() => {
    const galleryArr = [];
    galleryObj.forEach((galleryItens, index) => {
      if (index % 3 === 0) galleryArr.push([]);
      galleryArr[itemArr(index)] = [...galleryArr[itemArr(index)], galleryItens];
    });

    setGalleryonScreen(galleryArr);
  }, [setGalleryonScreen]);

  return (
    <main className="main-container">
      <h1>Home</h1>
      <div className="cards-container">
        {galleryonScreen.map((item, index) => (
          <div key={item[itemArr(index)].id}>
            {item
              .map(({ id, image }) => (
                <div key={id}>
                  <img src={image} alt="a" />
                </div>
              ))}
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home;
