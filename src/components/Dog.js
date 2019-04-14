import React from 'react';
import { FaDog } from 'react-icons/fa';

const Dog = ({ data }) => {
  const style = {
    fontSize: 48,
    color: 'F17300',
    cursor: 'pointer',
  };

  return <FaDog style={style} />;
};

export default Dog;