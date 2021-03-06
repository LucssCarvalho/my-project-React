import React from 'react';

import { NavLink } from 'react-router-dom';

const LinkWrapper = props => {
    return (
        <NavLink activeStyle={{ fontWeight: "bold" }} to={props.to}{...props} />
    );
}
export default LinkWrapper;