import React from 'react';

const Park = ({data}) => {
  const style = {
    border: '1px solid green',
    background: 'green',
    height: 100,
    width: 100,
    borderRadius: 50,
    fontSize: 32,
    textAlign: 'center',
  }

  return (
    <div style={style}>
      {data.name}
    </div>
  );
}

export default Park;