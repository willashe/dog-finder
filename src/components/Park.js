import React from 'react';
import PropTypes from 'prop-types';
import { FaTree } from 'react-icons/fa';

const Park = ({ data }) => {
  const style = {
    fontSize: 48,
    color: '#315659',
  };

  return <FaTree style={style} />;
};

Park.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Park;