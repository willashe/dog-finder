import React from 'react';
import { connect } from 'react-redux';

import {
  toggleDogsVisible as toggleDogsVisibleAction,
  toggleParksVisible as toggleParksVisibleAction,
} from '../redux/actions'

const Controls = ({ toggleDogsVisible, toggleParksVisible }) => {
  const style = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 100,
    zIndex: 1,
    background: 'rgba(255, 255, 255, 0.5)',
    fontSize: 48,
  };

  return (
    <div style={style}>
      Controls
      <button style={{ fontSize: 48 }} onClick={toggleDogsVisible}>Toggle Dogs</button>
      <button style={{ fontSize: 48 }} onClick={toggleParksVisible}>Toggle Parks</button>
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