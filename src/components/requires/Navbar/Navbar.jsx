import React, { useState, useEffect } from "react";
import './Navbar.css';

import { logo, menu } from '../../../content/images';

function Navbar() {

    const [myLinks, setMyLinks] = useState(false);
    const [myLinksClasses, setMyLinkClasses] = useState("my-nav-links my-nav-links-close");
    const [myLinkStyle, setMyLinkStyle] = useState({display: 'none'});
    useEffect(()=>{
        if(myLinks) {
            setMyLinkClasses("my-nav-links my-nav-links-open");
            setTimeout(()=>{
                setMyLinkStyle({});
            }, 150);
        }
        else {
            setMyLinkClasses("my-nav-links my-nav-links-close");
            setMyLinkStyle({display: 'none'});
        }

    },[myLinks])

    return(
        <div className="my-nav">
            <div className="nav-manager">
                <a href="./">
                    <img className="my-nav-logo" src={logo} alt={'ChemCharts'}/>
                </a>

                <button className="nav-button"
                    onClick={()=>{
                        setMyLinks(!myLinks);
                    }}
                >
                    <img style={{height: '1.3rem'}} src={menu} alt="" />
                </button>
            </div>
            <div className={myLinksClasses}>
                <a style={myLinkStyle} className="my-nav-link" href="./#home">Home</a>
                <a style={myLinkStyle} className="my-nav-link" href="./#graphs">Graphs</a>
                <a style={myLinkStyle} className="my-nav-link" href="./#convs">Conversions</a>
                <a style={myLinkStyle} className="my-nav-link" href="./#about">About</a>
            </div>
        </div>
    );
}

export default Navbar;