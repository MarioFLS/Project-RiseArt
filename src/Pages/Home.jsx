import React, { useContext } from 'react';
import ArtContext from '../context/ArtContext';

function Home() {
  const { gallery } = useContext(ArtContext);
  return (
    <main>
      <h1>Home</h1>
      <div>
        {gallery.map(({ name, image, type }) => (
          <div key={name}>
            <p>{name}</p>
            <img width="200px" src={image} alt="Imagem" />
            <p>{type}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home;
