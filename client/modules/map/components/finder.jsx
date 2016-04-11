import React from 'react';
import { Base, Button, Heading, Text } from 'rebass';

import GuggleMap from './google_map.jsx';

const Finder = () => (
    <Base mt={4} style={{ width: '100%', height: 400 }}>
        <GuggleMap />
    </Base>
);

export default Finder;
