import React from 'react';
import PropTypes from 'prop-types';
import ArtContext from './ArtContext';

function ArtProvider({ children }) {
  const context = {};
  return (
    <ArtProvider.Provider value={context}>
      {children}
    </ArtProvider.Provider>
  );
}

export default ArtProvider;

ArtProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
