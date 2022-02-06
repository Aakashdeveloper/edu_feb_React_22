import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div id="brand">
                Developer Food
            </div>
            <div>
                <Link to="/">Home</Link>
            </div>
        </div>
    )
}

export default Header;