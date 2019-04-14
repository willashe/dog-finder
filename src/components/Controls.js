import React from 'react';
import { connect } from 'react-redux';
import { FaDog } from 'react-icons/fa';
import { FaTree } from 'react-icons/fa';

import {
  toggleDogsVisible as toggleDogsVisibleAction,
  toggleParksVisible as toggleParksVisibleAction,
} from '../redux/actions'

const Controls = ({ toggleDogsVisible, toggleParksVisible, dogsVisible, parksVisible }) => {
  const containerStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    zIndex: 1,
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 0.75)',
  };

  const buttonStyle = {
    fontSize: 48,
    margin: '8px 32px',
    cursor: 'pointer',
  }

  return (
    <div style={containerStyle}>
      <FaDog style={{ ...buttonStyle, color: dogsVisible === true ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,0.3)' }} onClick={toggleDogsVisible} />
      <FaTree style={{ ...buttonStyle, color: parksVisible === true ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,0.3)' }} onClick={toggleParksVisible} />
    </div>
  );
};

const mapStateToProps = ({ dogsVisible, parksVisible }) => ({
  dogsVisible,
  parksVisible,
});

const mapDispatchToProps = (dispatch) => ({
  toggleDogsVisible: () => {
    dispatch(toggleDogsVisibleAction());
  },
  toggleParksVisible: () => {
    dispatch(toggleParksVisibleAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Controls);