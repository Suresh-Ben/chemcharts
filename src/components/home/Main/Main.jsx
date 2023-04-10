import React from "react";
import './Main.css';

import { search, convs, graphs } from '../../../content/images';

function Main() {
    return(
        <div className="main">
            <h3 style={{fontSize: '4.5rem', margin: 0}}>Explore ChemCharts</h3>
            <p style={{margin: 0}}>Everything a chemical engineer needs to speed up</p>
            
            <br />
            <br />

            <div style={{display: "flex"}}>
                <input style={{width: '50rem', fontSize: '1.1rem', paddingLeft: '1rem', height: '3rem'}} type="text" placeholder="Search data"/>
                <button style={{height: '3rem', width: '3rem'}}>
                    <img className="search-button" src={search} alt="search"/>
                </button>
            </div>

            <div style={{marginTop: '.5rem'}}>
                <a style={{textDecoration: 'none', color: 'grey'}} href="/temp-conv"> Temperature conversion </a>|
                <a style={{textDecoration: 'none', color: 'grey'}} href="/press-conv"> Pressure conversion </a>|
                <a style={{textDecoration: 'none', color: 'grey'}} href="/molecular-conv"> Molecular weight calculation </a>|
                <a style={{textDecoration: 'none', color: 'grey'}} href="/binary-graph"> Binary Graphs </a>
            </div>
            <div style={{display: "flex", alignItems: 'center', marginTop: '2.5rem'}}>
                <a href="/#graphs" style={{display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img style={{height: '3.5rem'}} src={graphs} alt="graphs"/>
                    <p style={{color: 'black', fontWeight: 'bold'}}>Graphs</p>
                </a>

                <p style={{margin: '2rem'}}></p>

                <a href="/#convs" style={{display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img style={{height: '3.5rem'}} src={convs} alt="graphs"/>
                    <p style={{color: 'black', fontWeight: 'bold'}}>Conersions</p>
                </a>
            </div>
        </div>
    );
}

export default Main;