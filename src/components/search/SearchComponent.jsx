import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { debounce } from 'debounce';
import { Input } from './SearchStyles';
import { fetch as fetchList } from '../../redux/actions/list';

const SearchComponent = props => {
  const fetch = debounce(phrase => {
    props.fetchList(phrase);
  }, 1100);

  const onChange = e => {
    const phrase = e.target.value;

    if (phrase.length > 2) {
      fetch(phrase);
    }
  };

  return <Input placeholder="Enter phrase.." onChange={onChange} />;
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchList,
    },
    dispatch,
  );

SearchComponent.propTypes = {
  fetchList: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(SearchComponent);
