import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaDog } from 'react-icons/fa';

class Dog extends Component {
  handleClick = () => {
    const { data, handleClick } = this.props;
    handleClick(data);
  }

  render() {
    const style = {
      fontSize: 48,
      color: '#F17300',
      cursor: 'pointer',
    };

    return <FaDog style={style} onClick={this.handleClick} />;
  }
}

Dog.propTypes = {
  data: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default Dog;