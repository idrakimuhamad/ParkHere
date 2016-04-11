import React from 'react';
import { Base } from 'rebass';

import Header from './header.jsx';

const Layout = ({content = () => null }) => (
    <Base className="container" backgroundColor="white">
        <Header title="ParkHere" enableLogin={true} />
        {content()}
    </Base>
);

export default Layout;
