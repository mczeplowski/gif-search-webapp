import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Item from './item/ItemComponent';

const ListComponent = ({ data, isLoading }) => {
  if (isLoading) {
    return <h1>Loading..</h1>;
  }

  return (
    <div>
      {!!data.length &&
        data.map((img, i) => {
          const key = `image-${i}`;
          return <Item key={key} url={img.url} height={img.height} />;
        })}
    </div>
  );
};

const mapStateToProps = state => ({
  isLoading: state.list.isLoading,
  data: state.list.data,
});

ListComponent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      height: PropTypes.number,
    }),
  ).isRequired,
};

export default connect(mapStateToProps)(ListComponent);
