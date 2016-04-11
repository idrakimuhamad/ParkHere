import React, { Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from 'google-map-react';

const K_WIDTH = 16;
const K_HEIGHT = 16;
const styles= {
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: '2px solid #f44336',
  borderRadius: K_HEIGHT,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4
};

class GuggleMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: { lat: 59.938043, lng: 30.337157 }
        }
    }
    componentDidMount() {
        // get the current location of user
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this._updatePosition.bind(this));
        } else {
            console.info('Geolocation not supported')
        }
    }
    _updatePosition(position) {
        console.log(position);
        this.setState({
            location: { lat: position.coords.latitude, lng: position.coords.longitude }
        });
    }
    render() {
        return (
            <div style={{ width: '100%', height: 400 }}>
                <GoogleMap
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    center={this.state.location}>
                    <div lat={this.state.location.lat} lng={this.state.location.lng} style={styles} />
                </GoogleMap>
            </div>
        );
    }
}

GuggleMap.defaultProps = {
    center: {lat: 59.938043, lng: 30.337157},
    zoom: 9,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
};

export default GuggleMap;
