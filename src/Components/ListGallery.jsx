import PropTypes from 'prop-types';
import React from 'react';

function ListGallery({ onScreen }) {
  const getArts = JSON.parse(localStorage.getItem('arts'));

  const itemArr = (index) => Math.floor(index / 3);

  const deleteArt = (artId) => {
    localStorage.setItem(
      'arts',
      JSON.stringify(
        getArts.filter(({ id }) => id !== artId),
      ),
    );
  };
  return (
    <div className="cards-main-container">
      {onScreen.map((item, index) => (
        <div
          key={item[itemArr(index)].id}
          className="cards-container"
        >
          {item
            .map(({ id, image, name }, indexImg) => (
              <div
                data-testid="div-cards"
                key={id}
                className="card-image"
              >
                {getArts?.some((art) => art.id === id)
                && (
                <button
                  type="button"
                  className="btn-delete"
                  onClick={() => deleteArt(id)}
                >
                  <i className="material-icons delete-item">delete</i>
                </button>
                )}
                <img
                  className="image-onScreen"
                  src={image}
                  data-testid={`images-${indexImg}`}
                  alt={`Imagem de ${name}`}
                />
              </div>
            )).reverse()}
        </div>
      ))}
    </div>
  );
}

ListGallery.propTypes = {
  onScreen: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.any)).isRequired,
};

export default ListGallery;
