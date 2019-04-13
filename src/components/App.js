import React, { Component } from 'react';
import axios from 'axios';

import Controls from './Controls';
import Map from './Map';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dogs: [],
      parks: [],
    }
  }

  componentDidMount() {
    axios.get('http://dogfinder.emboldhealth.com/dogs', { params: { format: 'json', limit: 100 } })
      .then((response) => { this.handleDogsFetched(response) });

    axios.get('http://dogfinder.emboldhealth.com/parks', { params: { format: 'json', limit: 20 } })
      .then((response) => { this.handleParksFetched(response) });
  }

  handleDogsFetched(response) {
    this.setState({
      dogs: response.data.results,
    });
  }

  handleParksFetched(response) {
    this.setState({
      parks: response.data.results,
    });
  }

  render() {
    const {
      dogs,
      parks,
    } = this.state;

    if (!dogs.length || !parks.length) {
      return <>Loading...</>;
    }

    return (
      <>
        <Controls toggleDogs={this.toggleDogs} toggleParks={this.toggleParks} />
        <Map dogs={dogs} parks={parks} />
      </>
    );
  }
}

export default App;