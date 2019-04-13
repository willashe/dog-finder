import React from 'react';
import { FaTree } from 'react-icons/fa';

const Park = ({ data, visible }) => {
  const style = {
    display: visible === false ? 'none' : '',
    fontSize: 96,
    color: '#315659',
  };

  return <FaTree style={style} />;
};

export default Park;