import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import ArtContext from './ArtContext';
import gallery from '../gallery';

function ArtProvider({ children }) {
  const [galleryObj, setGalleryObj] = useState(gallery);
  const [inputFilter, setInputFilter] = useState('');
  const context = useMemo(() => ({
    gallery,
    galleryObj,
    setGalleryObj,
    setInputFilter,
    inputFilter,
  }));

  return (
    <ArtContext.Provider value={context}>
      {children}
    </ArtContext.Provider>
  );
}

export default ArtProvider;

ArtProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
