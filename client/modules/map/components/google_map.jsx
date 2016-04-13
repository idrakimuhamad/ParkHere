import React, { Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import GoogleMap from 'google-map-react';

class GuggleMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            center: { lat: 3.15694859, lng: 101.7123029 }
        };
    }
    _handleParkingMarkerReRender(clusters) {
        console.log(clusters);
        // let {clusters} = this.props;
        // let mountNode = React.findDOMNode(this.refs.parkingMarkers);
        // let unmount = React.unmountComponentAtNode(mountNode);
        // let markers = clusters.map(({ coords, id }) => (
        //     <div lat={coords[0]} lng={coords[1]} key={id} ref="parkingMarkers" className="available-parking__marker marker" />
        // ));
        //
        // // only then render the marker
        // return markers;
    }
    render() {
        let {currentLocation, clusters} = this.props;
        // this._handleParkingMarkerRender(clusters);
        return (
            <GoogleMap
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                center={this.props.center}>
                <div lat={currentLocation[0]} lng={currentLocation[1]} className="marker current">
                    <div className='pin'></div>
                    <div className='pulse'></div>
                </div>
                { clusters.map(({ coords, _id }) => (
                    <div lat={coords[0]} lng={coords[1]} key={_id} ref="parkingMarkers" className="marker parking">
                        <div className='pin'></div>
                    </div>
                ))}
            </GoogleMap>
        );
    }
}

GuggleMap.defaultProps = {
    center: { lat: 3.15694859, lng: 101.7123029 },
    zoom: 9
};

export default GuggleMap;
