import React from "react";

import './Home.css';
import Navbar from "../../components/requires/Navbar";
import Main from "../../components/home/Main";
import Graphs from "../../components/home/Graphs";
import Convs from "../../components/home/Convs";
import WhatIs from '../../components/home/About';
import About from "../../components/requires/About";

function Home() {
    return(
        <div>
            <Navbar />
            <Main/>
            <Graphs />
            <Convs />
            <WhatIs />
            <About />
        </div>
    );
}

export default Home;