import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';

const Title = () => {
  const style = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 100,
    zIndex: 1,
    background: 'rgba(255, 255, 255, 0.5)',
    fontSize: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const githubStyle = {
    float: 'right',
    fontSize: 128,
  }

  return (
    <div style={style}>
      <h1>DogFinder&trade;</h1>
      <a href="https://github.com/willashe/dog-finder"><FaGithubSquare style={githubStyle} /></a>
    </div>
  );
};

export default Title;