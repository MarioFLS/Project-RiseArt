import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import ArtContext from './ArtContext';
import gallery from '../gallery';

function ArtProvider({ children }) {
  const context = useMemo(() => ({ gallery }), []);

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
