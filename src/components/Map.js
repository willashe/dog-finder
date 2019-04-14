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

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoid2lsbGFzaGUiLCJhIjoiY2p1Y3l6ZzdqMGJtOTRkcDhyYWY4NXdsciJ9.D5quxTBoM8OBfS7fZ7QC3g';
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v9',
    });

    this.renderMarkers();
  }

  componentDidUpdate() {
    this.removeMarkers();
    this.renderMarkers();
  }

  componentWillUnmount() {
    this.map.remove();
  }

  markers = []

  // @TODO: naming things...
  renderMarkers() {
    const { dogs, parks, dogsVisible, parksVisible } = this.props;

    if (parksVisible) {
      parks.forEach((park) => {
        this.setMarker(Park, park);
      });
    }

    if (dogsVisible) {
      dogs.forEach((dog) => {
        this.setMarker(Dog, dog);
      });
    }
  }

  setMarker(component, data, visible) {
    const containerNode = document.createElement('div');
    this.markers.push(containerNode);

    new mapboxgl.Marker(containerNode)
      .setLngLat([data.longitude,data.latitude])
      .addTo(this.map);

    ReactDOM.render(
      React.createElement(
        component,
        { data, visible },
      ),
      containerNode
    );
  }

  removeMarkers() {
    this.markers.forEach((node) => {
      ReactDOM.unmountComponentAtNode(node);
      node.parentNode.removeChild(node);
    });

    this.markers = [];
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