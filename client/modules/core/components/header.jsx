import React from 'react';
import { Fixed, Toolbar, NavItem, Space } from 'rebass';

let loginLink;

const AppHeader = ({ title, enableLogin}) => {
    if (enableLogin) {
        loginLink = <NavItem is="a">Login</NavItem>;
    }
    return (
        <Fixed top={true} left={true} right={true} zIndex={3}>
            <Toolbar>
              <NavItem is="a" href="/">
                ParkHere
              </NavItem>
              <Space
                auto={true}
                x={1}
              />
             {loginLink}
            </Toolbar>
        </Fixed>
    )
};

export default AppHeader;
