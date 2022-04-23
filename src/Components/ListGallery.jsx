import PropTypes from 'prop-types';
import React from 'react';

function ListGallery({ onScreen }) {
  const itemArr = (index) => Math.floor(index / 3);
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
                {id}
                <img
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
  onScreen: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.objectOf)).isRequired,
};

export default ListGallery;
