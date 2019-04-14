import React, { Component } from 'react';
import axios from 'axios';

import Title from './Title';
import Map from './Map';
import Controls from './Controls';

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
    const { dogs, parks } = this.state;

    const loadingStyle = {
      display: 'flex',
      height: '100%',
      width: '100%',
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Architects Daughter', cursive",
    };

    if (!dogs.length || !parks.length) {
      return <div style={loadingStyle}>Loading...</div>;
    }

    return (
      <>
        <Title />
        <Map dogs={dogs} parks={parks} />
        <Controls />
      </>
    );
  }
}

export default App;