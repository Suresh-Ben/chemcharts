import React from "react";

import './About.css';
import { falsks } from '../.././../content/images';

function About() {
    return(
        <div id='about' className="whatis">
            <h1 style={{fontWeight: '100'}}>What is ChemCharts?</h1>
            <div style={{width: '65vw'}} className="whatis-para">
                <p>ChemCharts is a multi-task website useful for chemical engineers</p>
                <p>ChemCharts have a data base of most frequently used graphs by chemical engineers, It calculates the data needed by user quickly</p>
                <p>ChemCharts have a section called conversions, it have all type of possible conversions like temperature conversion, molecular weight etc...</p>
                <p>If required graph is not in our data base, user can upload their own graph and work with their graph.</p>
            </div>
            <img style={{height: '20rem'}} src={falsks} alt="chemcharts"/>
        </div>
    );
}

export default About;