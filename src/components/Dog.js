import React from 'react';
import { FaDog } from 'react-icons/fa';

const Dog = ({ data, visible }) => {
  const style = {
    display: visible === false ? 'none' : '',
    fontSize: 96,
    color: 'F17300',
  };

  return <FaDog style={style} />;
};

export default Dog;