import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

const Parkings = new Mongo.Collection('parkings');
let schema = new SimpleSchema({
    title: {
        type: String
    },
    coords: {
        type: [Number],
        decimal: true
    }
});

Parkings.attachSchema(schema);

export default Parkings;
