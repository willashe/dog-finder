import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';

const Title = () => {
  const style = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1,
    background: 'rgba(255, 255, 255, 0.75)',
    fontSize: 24,
    lineHeight: 0.5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    fontFamily: "'Architects Daughter', cursive",
  };

  const githubStyle = {
    float: 'right',
    fontSize: 48,
  }

  return (
    <div style={style}>
      <h1>DogFinder&reg;</h1>
      <a href="https://github.com/willashe/dog-finder"><FaGithubSquare style={githubStyle} /></a>
    </div>
  );
};

export default Title;