import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

class Map extends Component {
  constructor(props) {
    super(props);
    this.mapContainer = React.createRef();
  }

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoid2lsbGFzaGUiLCJhIjoiY2p1Y3l6ZzdqMGJtOTRkcDhyYWY4NXdsciJ9.D5quxTBoM8OBfS7fZ7QC3g';
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v9'
    });
  }

  componentWillUnmount() {
    this.map.remove();
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

    return (
      <>
        <div style={style} ref={this.mapContainer}></div>
      </>
    );
  }
}

export default Map;