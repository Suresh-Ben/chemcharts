import React from "react";
import './Navbar.css';

import { logo } from '../../../content/images';

function Navbar() {
    return(
        <div className="my-nav">
            <a href="./">
                <img className="my-nav-logo" src={logo} alt={'ChemCharts'}/>
            </a>
            <div className="my-nav-links">
                <a className="my-nav-link" href="./#home">Home</a>
                <a className="my-nav-link" href="./#graphs">Graphs</a>
                <a className="my-nav-link" href="./#convs">Conversions</a>
                <a className="my-nav-link" href="./#about">About</a>
            </div>
        </div>
    );
}

export default Navbar;