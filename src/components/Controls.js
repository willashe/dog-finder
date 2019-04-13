import React from 'react';
import { connect } from 'react-redux';
import { FaDog } from 'react-icons/fa';
import { FaTree } from 'react-icons/fa';

import {
  toggleDogsVisible as toggleDogsVisibleAction,
  toggleParksVisible as toggleParksVisibleAction,
} from '../redux/actions'

const Controls = ({ toggleDogsVisible, toggleParksVisible }) => {
  const containerStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    zIndex: 1,
    fontSize: 48,
    textAlign: 'center',
  };

  const buttonStyle = {
    fontSize: 128,
    margin: '12px 32px',
    cursor: 'pointer',
  }

  return (
    <div style={containerStyle}>
      <FaDog style={buttonStyle} onClick={toggleDogsVisible} />
      <FaTree style={buttonStyle} onClick={toggleParksVisible} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleDogsVisible: () => {
    dispatch(toggleDogsVisibleAction());
  },
  toggleParksVisible: () => {
    dispatch(toggleParksVisibleAction());
  },
});

export default connect(null, mapDispatchToProps)(Controls);