import React from 'react';

const Dog = ({ data, visible }) => {
  const style = {
    border: '1px solid red',
    background: 'red',
    height: 100,
    width: 100,
    borderRadius: 50,
    fontSize: 32,
    textAlign: 'center',
  };

  return (
    <div style={{ ...style, display: visible === false ? 'none' : '' }}>
      {data.name}
    </div>
  );
};

export default Dog;