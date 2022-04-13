import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import ArtContext from './ArtContext';

function ArtProvider({ children }) {
  const context = useMemo(() => ({}), []);

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
