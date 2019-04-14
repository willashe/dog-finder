import React from 'react';
import PropTypes from 'prop-types';
import { FaDog } from 'react-icons/fa';

const Dog = ({ data }) => {
  const style = {
    fontSize: 48,
    color: 'F17300',
    cursor: 'pointer',
  };

  return <FaDog style={style} />;
};

Dog.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Dog;