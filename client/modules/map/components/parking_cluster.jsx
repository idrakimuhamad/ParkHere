import React, { Component} from 'react';
import { Base } from 'rebass';
import GuggleMap from './google_map';

class ParkingCluster extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLocationRetrieved: false,
            currentLocation: [5.15694859, 120.7123029]
        };
        this._updatePosition = this._updatePosition.bind(this);
    }
    componentDidMount() {
        // get the current location of user
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this._updatePosition);
        } else {
            console.info('Geolocation not supported');
        }
    }
    _updatePosition(position) {
        this.setState({
            currentLocationRetrieved: true,
            currentLocation: [position.coords.latitude, position.coords.longitude]
        });
    }
    render() {
        const {parkings} = this.props;
        return (
            <Base style={{ width: '100%', height: 400 }}>
                <GuggleMap currentLocation={this.state.currentLocation} clusters={parkings}>
                </GuggleMap>
            </Base>
        )
    }
}

export default ParkingCluster;
