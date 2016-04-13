import {Parkings} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('parkings', function () {
      const selector = {};
      const options = {
          fields: { _id: 1, coords: 1 },
          limit: 10
      };
      return Parkings.find({});
  });
}
