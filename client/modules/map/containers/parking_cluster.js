import ParkingCluster from '../components/parking_cluster.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('parkings').ready()) {
    const parkings = Collections.Parkings.find().fetch();
    console.log(parkings);
    onData(null, {parkings});
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(ParkingCluster);
