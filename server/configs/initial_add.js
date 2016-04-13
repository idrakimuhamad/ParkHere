import {Parkings} from '/lib/collections';

export default function() {
    if (!Parkings.findOne()) {
        const initialCoord = {
            lat: 3.15694859,
            lng: 101.7123029
        };

        for (let p = 1; p <= 5; p++) {
            const {lat, lng} = initialCoord;
            const latitude = lat + p/100;
            const longitude = lng + p/100;

            const insert = {
                title: `This is parking no ${p}`,
                coords: [latitude, longitude]
            };

            Parkings.insert(insert);
        }
    }
}
