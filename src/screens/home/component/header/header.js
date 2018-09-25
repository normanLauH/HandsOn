import React from 'react';

import './header.css';

import Select from './select.js';
import Logo from './logo.js';

function Header(){
    return(
        <div className="header">
            <Logo />
            <Select position="left"/>
            <Select position="right"/>
        </div>
    );
}
export default Header;