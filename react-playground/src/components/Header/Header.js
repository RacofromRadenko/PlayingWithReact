import React from 'react'
import { NavLink } from 'react-router-dom';

import './Header.less';

const header = (props) => {

    return (
        <div className="container">
            <div className="header">
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/game-list">GAMES</NavLink>
                <NavLink to="/about-us">ABOUT US</NavLink>
                <NavLink to="/card-order">CARD ORDER</NavLink>
            </div>
        </div>
    )
}

export default header;