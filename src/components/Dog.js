import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaDog } from 'react-icons/fa';

class Dog extends Component {
  handleClick = () => {
    const { data, handleClick } = this.props;
    handleClick(data);
  }

  render() {
    const { data, selected } = this.props;

    const dogStyle = {
      fontSize: 48,
      color: '#F17300',
      cursor: 'pointer',
    };

    const infoPopupStyle = {
      position: 'absolute',
      background: 'rgba(70, 130, 180, 0.9)',
      padding: 4,
      color: 'white',
      borderRadius: 3,
      left: '50%',
      transform: 'translate(-50%, -100%)',
    }
  
    return (
      <>
        {selected ? <div style={infoPopupStyle}>{data.name}</div> : null}
        <FaDog style={dogStyle} onClick={this.handleClick} />
      </>
    );
  }
}

Dog.propTypes = {
  data: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
}

export default Dog;