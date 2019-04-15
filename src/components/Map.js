import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import { connect } from 'react-redux';

import Dog from './Dog';
import Park from './Park';

class Map extends Component {
  constructor(props) {
    super(props);

    this.mapContainer = React.createRef();
  }

  markers = {
    dog: [],
    park: [],
  }
  popup = null;

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoid2lsbGFzaGUiLCJhIjoiY2p1Y3l6ZzdqMGJtOTRkcDhyYWY4NXdsciJ9.D5quxTBoM8OBfS7fZ7QC3g';
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v9',
    });

    this.setParkMarkers();
    this.setDogMarkers();
  }

  componentDidUpdate() {
    const { dogsVisible, parksVisible } = this.props;

    if (parksVisible) {
      this.markers.park.length === 0 && this.setParkMarkers();
    } else {
      this.removeMarkers('park');
    }

    if (dogsVisible) {
      this.markers.dog.length === 0 && this.setDogMarkers();
    } else {
      this.removeMarkers('dog');

      if (this.popup) {
        this.popup.remove();
        this.popup = null;
      }
    }
  }

  componentWillUnmount() {
    this.map.remove();
  }

  setDogMarkers() {
    const { dogs } = this.props;

    dogs.forEach((dog) => {
      this.setMarker(Dog, dog, 'dog');
    });
  }

  setParkMarkers() {
    const { parks } = this.props;

    parks.forEach((park) => {
      this.setMarker(Park, park, 'park');
    });
  }

  removeMarkers(type) {
    this.markers[type].forEach((node) => {
      ReactDOM.unmountComponentAtNode(node);
      node.parentNode.removeChild(node);
    });

    this.markers[type] = [];
  }

  setMarker(component, data, type) {
    const containerNode = document.createElement('div');
    this.markers[type].push(containerNode);

    new mapboxgl.Marker(containerNode)
      .setLngLat([data.longitude, data.latitude])
      .addTo(this.map);

    ReactDOM.render(
      React.createElement(
        component,
        {
          data,
          handleClick: this.handleClickDog,
        },
      ),
      containerNode,
    );
  }

  handleClickDog = (dog) => {
    const popupOptions = {
      offset: {
        'top': [0, 24],
        'right': [-24, 0],
        'bottom': [0, -24],
        'left': [24, 0],
        'top-right': [-24, 24],
        'top-left': [24, 24],
        'bottom-right': [-24, -24],
        'bottom-left': [24, -24],
      },
      closeButton: false,
    };

    this.popup = new mapboxgl.Popup(popupOptions)
      .setLngLat([dog.longitude, dog.latitude])
      .setHTML(`<h3 style="margin: 0">${dog.name}</h3>`)
      .addTo(this.map);
  }

  render() {
    const style = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
    }

    return <div style={style} ref={this.mapContainer}></div>;
  }
}

Map.propTypes = {
  dogs: PropTypes.array.isRequired,
  parks: PropTypes.array.isRequired,
  dogsVisible: PropTypes.bool.isRequired,
  parksVisible: PropTypes.bool.isRequired,
}

const mapStateToProps = ({ dogsVisible, parksVisible }) => ({
  dogsVisible,
  parksVisible,
});

export default connect(mapStateToProps)(Map);