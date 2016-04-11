import React from 'react';
import { Base, Button, Heading, Text } from 'rebass';

const Home = () => (
    <Base backgroundColor="white" mt={4} py={4} px={2} style={{textAlign: 'center'}}>
        <Heading big={true} level={1}>ParkHere</Heading>
        <Text small={true} mb={2}>Find your parking, in style</Text>
        <Button theme="primary" big={true} href="/find">Find Parking Now</Button>
    </Base>
);

export default Home;
