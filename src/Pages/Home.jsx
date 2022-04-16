import React, { useContext } from 'react';
import ArtContext from '../context/ArtContext';

function Home() {
  const { galleryObj } = useContext(ArtContext);
  return (
    <main>
      <h1>Home</h1>
      <div>
        {galleryObj.map(({ name, image }) => (
          <div key={name}>
            <p>{name}</p>
            <img width="200px" src={image} alt="Imagem" />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home;
