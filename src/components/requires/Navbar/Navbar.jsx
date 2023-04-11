import React, { useState, useEffect } from "react";
import './Navbar.css';

import { logo, menu } from '../../../content/images';

function Navbar() {

    const [myLinks, setMyLinks] = useState(false);
    const [myLinksClasses, setMyLinkClasses] = useState("my-nav-links my-nav-links-close");
    const [myLinkClass, setMyLinkClass] = useState("my-nav-link");
    useEffect(()=>{
        if(myLinks) {
            setMyLinkClasses("my-nav-links my-nav-links-open");
            setTimeout(()=>{
                setMyLinkClass("my-nav-link");
            }, 150);
        }
        else {
            setMyLinkClasses("my-nav-links my-nav-links-close");
            setMyLinkClass("my-nav-link nav-link-close");
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
                <a className={myLinkClass} href="./#home">Home</a>
                <a className={myLinkClass} href="./#graphs">Graphs</a>
                <a className={myLinkClass} href="./#convs">Conversions</a>
                <a className={myLinkClass} href="./#about">About</a>
            </div>
        </div>
    );
}

export default Navbar;