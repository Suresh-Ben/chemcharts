import React from "react";

import './About.css';
import { linkedin, mail } from '../../../content/images';

function About() {
    return(
        <div className="about">
            <div className="about-main">
                <div className="about-us">
                    <h2 style={{margin: 0}}>Dr B R Ambedkar National Institute of Technology, Jalandhar</h2>
                    <p style={{margin: 0}}>G.T. Road, Amritsar Bye-Pass, Jalandhar, Punjab</p>
                    <br />

                    <p>
                        ChemCharts is a public website, use this website to make your work flow faster and accurate without errors.
                    </p>
                    <p>
                        This website developed as a college project under the guidence of <span style={{fontWeight: 'bold'}}>Dr. Raj Kumar Arya</span>
                    </p>

                    <a href="mailto:sureshb.cm.19@nitj.ac.in" style={{display: "flex", alignItems: 'center', marginTop: '1rem', textDecoration: 'none'}}>
                        <img src={mail} alt="linkedin" className="about-link-img"/>
                        <h6 className="about-link-name">Contat us</h6>
                    </a>
                </div>
                <div className="about-links">

                    <h3 style={{padding: '0', margin: '0'}}>Developer</h3>
                    <a href="https://www.linkedin.com/in/suresh-bennabatthula-836854252/" style={{display: "flex", alignItems: 'center', marginTop: '1rem', textDecoration: 'none'}}>
                        <img src={linkedin} alt="linkedin" className="about-link-img"/>
                        <h6 className="about-link-name">Suresh Bennabatthula</h6>
                    </a>

                    <br />

                    <h3 style={{padding: '0', margin: '0'}}>Data gathered by</h3>
                    <div>
                        <a href="https://www.linkedin.com/in/suresh-bennabatthula-836854252/" style={{display: "flex", alignItems: 'center', marginTop: '1rem', textDecoration: 'none'}}>
                            <img src={linkedin} alt="linkedin" className="about-link-img"/>
                            <h6 className="about-link-name">Guntu Raju</h6>
                        </a>
                        <a href="https://www.linkedin.com/in/suresh-bennabatthula-836854252/" style={{display: "flex", alignItems: 'center', marginTop: '.5rem', textDecoration: 'none'}}>
                            <img src={linkedin} alt="linkedin" className="about-link-img"/>
                            <h6 className="about-link-name">Korra Hari Krishna</h6>
                        </a>
                    </div>
                </div>
            </div>

            <br />
            <br />

            <p>ChemCharts&copy; is developed using public data</p>
        </div>
    );
}

export default About;