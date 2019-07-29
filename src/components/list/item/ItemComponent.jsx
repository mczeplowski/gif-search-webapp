import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import { ItemContainer } from './ItemStyles';

const ItemComponent = ({ url, height }) => (
  <ItemContainer>
    <LazyLoad height={height}>
      <img src={url} />
    </LazyLoad>
  </ItemContainer>
);

ItemComponent.propTypes = {
  url: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
};

export default ItemComponent;
