import React, { useEffect, useState } from "react";
import Spline from "cubic-spline";
import Chart from 'react-apexcharts';

import './BinaryGraph.css';
import useBinaryData from "../../../hooks/useBinaryData";

import Navbar from "../../requires/Navbar";
import About from "../../requires/About";

/**
 * @dev
 * a ==> more volatile compound
 * b ==> less volatile compound
 * 
 * xa => a mole fraction in liq
 * ya => a mole fraction in vap
 */

function BinaryGraph() {

    const graphsData = useBinaryData();
    const [binaryData, setBinaryData] = useState();
    const [selectedGraph, setSelectedGraph] = useState("benzene toulene");
    const [xa_spline, setXaSpline] = useState(null);
    const [ya_spline, setYaSpline] = useState(null);

    const [eq_temperature, setEqTemperature] = useState();
    const [xa, setXa] = useState();
    const [xb, setXb] = useState();
    const [ya, setYa] = useState();
    const [yb, setYb] = useState();

    const [temp_err, setTempErr] = useState(null);
    const [x_err, setXErr] = useState(null);
    const [y_err, setYErr] = useState(null);

    function xaSpline() {
        if(!binaryData) return;
        
        const _xa = binaryData.x_a;
        const temperature = binaryData.temperature;
        const temp_xaSpline = new Spline(_xa, temperature);
        setXaSpline(temp_xaSpline);
    }

    function yaSpline(){
        if(!binaryData) return;

        const temperature = binaryData.temperature;
        const _ya = binaryData.y_a;
        const temp_yaSpline = new Spline(_ya, temperature);
        setYaSpline(temp_yaSpline);
    }

    useEffect(()=>{
        if(selectedGraph === "benzene toulene" && (binaryData? binaryData.title !== graphsData.benzene_toulene.title: true))
            setBinaryData(graphsData.benzene_toulene);
        else if(selectedGraph === "acetone water" && (binaryData? binaryData.title !== graphsData.acetone_water.title : true))
            setBinaryData(graphsData.acetone_water);
        else if(selectedGraph === "acetone ethanol" && (binaryData? binaryData.title !== graphsData.acetone_ethanol.title : true))
            setBinaryData(graphsData.acetone_ethanol);
        else if(selectedGraph === "ethanol water" && (binaryData? binaryData.title !== graphsData.ethanol_water.title : true))
            setBinaryData(graphsData.ethanol_water);

        xaSpline();
        yaSpline();
    },[selectedGraph, binaryData]);

    function truncateDecimals(number) {
        var ans = Math.round(number*1000);
        return ans/1000;
    }

    function setToDefault() {
        //values
        setEqTemperature('');
        setXa('');
        setXb('');
        setYa('');
        setYb('');

        //error
        setTempErr(null);
        setXErr(null);
        setYErr(null);
    }

    function convertTemperature(_temp, ind) {
        if(!binaryData) return;
        if(_temp === '') {
            setToDefault();
            return;
        }
        _temp = Number(_temp);

        const temperature = binaryData.temperature;
        if(_temp < Number(temperature[temperature.length -1]) || _temp > Number(temperature[0])) {
            setToDefault();
            setEqTemperature(_temp);
            setTempErr('temperature should be between ' + temperature[temperature.length -1] + ' and ' + temperature[0]);
            return;
        }
        else
            setTempErr(null);

        temperature.reverse();
        const _xa = binaryData.x_a;
        _xa.reverse();
        const _ya = binaryData.y_a;
        _ya.reverse();
        const xTempSpline = new Spline(temperature, _xa);
        const yTempSpline = new Spline(temperature, _ya);

        if(ind !== 'x'){
            const x_a = xTempSpline.at(_temp);
            setXa(truncateDecimals(x_a));
            const x_b = 1 - x_a;
            setXb(truncateDecimals(x_b));
        }

        if(ind !== 'y') {
            const y_a = yTempSpline.at(_temp);
            setYa(truncateDecimals(y_a));
            const y_b = 1 - y_a;
            setYb(truncateDecimals(y_b));
        }

        temperature.reverse();
        _xa.reverse();
        _ya.reverse();
    }

    function convertXa(_xa) {
        if(_xa === '') {
            setToDefault();
            return;
        }
        _xa = Number(_xa);
        if(_xa < 0 || _xa > 1) {
            setToDefault();
            setXErr('value of x must be between 0 and 1');
            setXa(_xa);
            return;
        }
        else
            setXErr(null);

        const x_b = 1 - _xa;
        setXb(truncateDecimals(x_b));

        const _temp = xa_spline.at(_xa);
        setEqTemperature(truncateDecimals(_temp));
        convertTemperature(_temp, 'x');
    }

    function conevertYa(_ya) {
        console.log(_ya)
        if(_ya === '') {
            setToDefault();
            return;
        }
        _ya = Number(_ya);
        if(_ya > 1 || _ya < 0) {
            setToDefault();
            setYErr('value of y must be between o and 1');
            setYa(_ya);
            return;
        }
        else
            setYErr(null);

        const y_b = 1 - _ya;
        setYb(truncateDecimals(y_b)); 
        
        const _temp = ya_spline.at(_ya);
        setEqTemperature(truncateDecimals(_temp));
        convertTemperature(_temp, 'y');
    }

    return(
        <div>
            <Navbar />
            <div className="binary-graph">
                <h1 style={{textAlign: 'center', marginBottom: '1rem'}}>Binary Graphs</h1>
                <div className="binary-graph-main">
                    <div className="graph">
                        <h3 style={{textAlign: 'center'}}>{binaryData? binaryData.title : 'Binary Graph'}</h3>
        
                        {xa_spline && ya_spline ? 
                            <Chart 
                                type="line"
                                width={window.innerWidth < 600? window.innerWidth*0.9 : 600}
                                height={window.innerWidth < 600? window.innerWidth*0.88 :580}
                        
                                series={[
                                    {
                                        name: 'Bubble curve',
                                        data: [ truncateDecimals(xa_spline.at(0)),
                                                truncateDecimals(xa_spline.at(0.05)),
                                                truncateDecimals(xa_spline.at(0.1)), 
                                                truncateDecimals(xa_spline.at(0.15)), 
                                                truncateDecimals(xa_spline.at(0.2)), 
                                                truncateDecimals(xa_spline.at(0.25)), 
                                                truncateDecimals(xa_spline.at(0.3)), 
                                                truncateDecimals(xa_spline.at(0.35)), 
                                                truncateDecimals(xa_spline.at(0.4)), 
                                                truncateDecimals(xa_spline.at(0.45)), 
                                                truncateDecimals(xa_spline.at(0.5)), 
                                                truncateDecimals(xa_spline.at(0.55)), 
                                                truncateDecimals(xa_spline.at(0.6)), 
                                                truncateDecimals(xa_spline.at(0.65)), 
                                                truncateDecimals(xa_spline.at(0.7)), 
                                                truncateDecimals(xa_spline.at(0.75)), 
                                                truncateDecimals(xa_spline.at(0.8)), 
                                                truncateDecimals(xa_spline.at(0.85)), 
                                                truncateDecimals(xa_spline.at(0.9)), 
                                                truncateDecimals(xa_spline.at(0.95)), 
                                                truncateDecimals(xa_spline.at(1))]
                                    },
                                    {
                                        name: 'Dew curve',
                                        data: [ truncateDecimals(ya_spline.at(0)),
                                                truncateDecimals(ya_spline.at(0.05)),
                                                truncateDecimals(ya_spline.at(0.1)), 
                                                truncateDecimals(ya_spline.at(0.15)), 
                                                truncateDecimals(ya_spline.at(0.2)), 
                                                truncateDecimals(ya_spline.at(0.25)), 
                                                truncateDecimals(ya_spline.at(0.3)), 
                                                truncateDecimals(ya_spline.at(0.35)), 
                                                truncateDecimals(ya_spline.at(0.4)), 
                                                truncateDecimals(ya_spline.at(0.45)), 
                                                truncateDecimals(ya_spline.at(0.5)), 
                                                truncateDecimals(ya_spline.at(0.55)), 
                                                truncateDecimals(ya_spline.at(0.6)), 
                                                truncateDecimals(ya_spline.at(0.65)), 
                                                truncateDecimals(ya_spline.at(0.7)), 
                                                truncateDecimals(ya_spline.at(0.75)), 
                                                truncateDecimals(ya_spline.at(0.8)), 
                                                truncateDecimals(ya_spline.at(0.85)), 
                                                truncateDecimals(ya_spline.at(0.9)), 
                                                truncateDecimals(ya_spline.at(0.95)), 
                                                truncateDecimals(ya_spline.at(1))]
                                    }
                                ]}
                            
                                options={{
                                    xaxis:{
                                        title: {text: (binaryData? binaryData.a: '' ) + '(x) mole-fraction'},
                                        categories:['0', '0.05', '0.1', '0.15', '0.2', '0.25', '0.3', '0.35', '0.4', '0.45', '0.5', 
                                                    '0.55', '0.6', '0.65', '0.7', '0.75', '0.8', '0.85', '0.9', '0.95', '1'],
                                        // categories:['0', '', '0.1', '', '0.2', '', '0.3', '', '0.4', '', '0.5', 
                                        //             '', '0.6', '', '0.7', '', '0.8', '', '0.9', '', '1']
                                    },
                                    stroke: {
                                        curve: 'straight',
                                        width: 1,
                                    },
                                    yaxis: {
                                        title: {text: 'temperature (C)'},
                                        labels:{
                                        }
                                    }
                                }}
                            ></Chart> : undefined
                        }
                    </div>
                    <div className="graph-calculas">
                        <label style={{paddingRight: '1rem', marginLeft: '1rem'}} htmlFor="graphs">Choose a graph: </label>
                        <select
                            name="graphs"
                            value={selectedGraph}
                            onChange={(e)=>{
                                setSelectedGraph(e.target.value);
                            }}
                        >
                            <option value="benzene toulene">benzene toulene</option>
                            <option value="ethanol water">ethanol water</option>
                            <option value="acetone water">acetone water</option>
                            <option value="acetone ethanol">acetone ethanol</option>
                        </select>
                        
                        <div className="graph-caluculations row">
                            <div className="col-lg-8 temp-col">
                                <h1 style={{marginTop: '.35rem'}}>Temperature</h1>
                                <input className="rankine my-input" placeholder="temprature(°C)" type="number" 
                                    value={eq_temperature}
                                    onChange={(e)=>{
                                        setEqTemperature(e.target.value);
                                        convertTemperature(e.target.value);
                                    }}
                                />
                            </div>
                            <p className="col-12" style={{textAlign: 'center', color: 'red'}}> {temp_err} </p>
                            
                            {/* liq phase */}
                            <div className="col-lg-5 temp-col comp-wid">
                                <h1 style={{marginTop: '.35rem'}}>Mole fraction of {binaryData? binaryData.a : ''} in liquid phase</h1>
                                <input className="rankine my-input" placeholder={binaryData? "x(" + binaryData.a  + ')' : ''} type="number"
                                    value={xa}
                                    onChange={(e)=>{
                                        setXa(e.target.value);
                                        convertXa(e.target.value);
                                    }}
                                />
                            </div>
                        
                            <div className="col-lg-5 temp-col comp-wid">
                                <h1 style={{marginTop: '.35rem'}}>Mole fraction of {binaryData? binaryData.b : ''} in liquid phase</h1>
                                <input className="rankine my-input" placeholder={binaryData? "x(" + binaryData.b + ')' : ''} type="number"
                                    value={xb}
                                    onChange={(e)=>{
                                        setXb(e.target.value);
                                        if(e.target.value === '')
                                            setToDefault();
                                        else if(Number(e.target.value) > 1 || Number(e.target.value) < 0)
                                            setXErr('value of x must be between 0 and 1');
                                        else {
                                            convertXa(1 - Number(e.target.value));
                                            setXa(truncateDecimals(1 - Number(e.target.value)))
                                        }
                                            
                                    }}
                                />
                            </div>
                            <p className="col-12" style={{textAlign: 'center', color: 'red'}}> {x_err} </p>
                        
                            {/* vap phase*/}
                            <div className="col-lg-5 temp-col comp-wid">
                                <h1 style={{marginTop: '.35rem'}}>Mole fraction of {binaryData? binaryData.a : ''} in vapour phase</h1>
                                <input className="rankine my-input" placeholder={binaryData? "y(" + binaryData.a  + ')' : ''} type="number"
                                    value={ya}
                                    onChange={(e)=>{
                                        setYa(e.target.value)
                                        conevertYa(e.target.value);
                                    }}
                                />
                            </div>
                        
                            <div className="col-lg-5 temp-col comp-wid">
                                <h1 style={{marginTop: '.35rem'}}>Mole fraction of {binaryData? binaryData.b : ''} in vapour phase</h1>
                                <input className="rankine my-input" placeholder={binaryData? "y(" + binaryData.b + ')' : ''} type="number"
                                    value={yb}
                                    onChange={(e)=>{
                                        setYb(e.target.value)

                                        if(e.target.value === '')
                                            setToDefault();
                                        else if(Number(e.target.value) > 1 || Number(e.target.value) < 0)
                                            setYErr('value of y must be between 0 and 1');
                                        else{
                                            setYa(truncateDecimals(1 - Number(e.target.value)));
                                            conevertYa(1 - Number(e.target.value));
                                        }
                                    }}
                                />
                            </div>
                            <p className="col-12" style={{textAlign: 'center', color: 'red'}}> {y_err} </p>

                        </div>
                    </div>
                </div>
            </div>
            <About/>
        </div>
    );
}

export default BinaryGraph;