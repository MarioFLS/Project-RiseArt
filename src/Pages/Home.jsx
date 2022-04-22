import React, { useContext, useEffect, useState } from 'react';
import Header from '../Components/Header';
import ListGallery from '../Components/ListGallery';
import ArtContext from '../context/ArtContext';
import '../css/Home.css';

function Home() {
  const { galleryObj, inputFilter } = useContext(ArtContext);
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
    gallery
      .forEach((galleryItens, index) => {
        if (index % 3 === 0) { galleryArr.push([]); }
        galleryArr[itemArr(index)] = [...galleryArr[itemArr(index)], galleryItens];
      });
    setGalleryonScreen(galleryArr.reverse());
  }, [setGalleryonScreen, gallery, setGallery, inputFilter]);

  return (
    <main className="main-container">
      <Header gallery={gallery} setGallery={setGallery} />
      <h1 id="Title-page">Home</h1>
      <ListGallery onScreen={galleryonScreen} />
    </main>
  );
}

export default Home;
