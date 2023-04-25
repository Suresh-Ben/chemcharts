import React, {useState, useEffect} from "react";
import './PressConv.css';

import Navbar from "../../requires/Navbar";

function PressConv() {

    const [from, setFrom] = useState('0');
    const [to, setTo] = useState('0');
    const [fromValue, setFromValue] = useState('');
    const [toValue, setToValue] = useState('');

    function convertAtm(val) {
      if(to === '0')
        setToValue(val);
      else if(to === '1')
        setToValue(101325*val);
      else if(to === '2')
        setToValue(14.695948775*val);
      else if(to === '3')
        setToValue(760*val);
      else if(to === '4')
        setToValue(760.00210018*val);
      else if(to === '5')
        setToValue(10332.559008*val);
      else if(to === '6')
        setToValue(101325*val);
      else if(to === '7')
        setToValue(2116.2166237*val);

      else 
        setToValue('error with calculation');
    }

    function converter(_from, _fromValue) {
      if(_from === to ){
        setToValue(_fromValue);
        return;
      }
      if(_from === '0') convertAtm(_fromValue);
      else if(_from === '1') convertAtm(0.0000098692 * _fromValue);
      else if(_from === '2') convertAtm(0.0680459639 * _fromValue);
      else if(_from === '3') convertAtm(0.0013157895 * _fromValue);
      else if(_from === '4') convertAtm(0.0013157858 * _fromValue);
      else if(_from === '5') convertAtm(0.0000967814 * _fromValue);
      else if(_from === '6') convertAtm(0.0000098692 * _fromValue);
      else if(_from === '7') convertAtm(0.0004725414 * _fromValue);
    }

    useEffect(()=>{
      converter(from, fromValue);
    }, [from, to]);

    return(
        <div>
            <Navbar/>
            <div className="temp-body">
            <div className="container">
                <h2 className="topic">Pressure scale converter</h2>
                <div className="row justify-content-center align-items-center">
                <div className="row converter-area">
                <div className="col-lg-6 col-sm-10 convert-from converter">
                    From:
                    <input type="number" style={{width: '100%'}}  className="convert-input"
                      value={fromValue}
                      onChange={e=>{
                      setFromValue(e.target.value)
                      converter(from, e.target.value);
                      }}
                    />
                    <div style={{margin: 0, padding: 0, display: 'flex', flexDirection: 'column', overflowY: 'scroll'}} className="converter-options">
                      <button 
                        style={from === '0'? {backgroundColor: "grey", color: "white"}: {}} className="converter-option"
                        onClick={()=>{
                          setFrom('0');
                        }}
                      >Standard atomosphere[atm]</button>
                      <button className="converter-option"
                        style={from === '1'? {backgroundColor: "grey", color: "white"}: {}}
                        onClick={()=>{
                          setFrom('1');
                        }}
                      >Pascal[Pa]</button>
                      <button className="converter-option"
                        style={from === '2'? {backgroundColor: "grey", color: "white"}: {}}
                        onClick={()=>{
                          setFrom('2');
                        }}
                      >psi</button>
                      <button className="converter-option"
                        style={from === '3'? {backgroundColor: "grey", color: "white"}: {}}
                        onClick={()=>{
                          setFrom('3');
                        }}
                      >torr</button>
                      <button className="converter-option"
                        style={from === '4'? {backgroundColor: "grey", color: "white"}: {}}
                        onClick={()=>{
                          setFrom('4');
                        }}
                      >millimeter mercury(0°C)</button>
                      <button className="converter-option"
                        style={from === '5'? {backgroundColor: "grey", color: "white"}: {}}
                        onClick={()=>{
                          setFrom('5');
                        }}
                      >millimeter water(4°C)</button>
                      <button className="converter-option"
                        style={from === '6'? {backgroundColor: "grey", color: "white"}: {}}
                        onClick={()=>{
                          setFrom('6');
                        }}
                      >newton/square meter</button>
                      <button className="converter-option"
                        style={from === '7'? {backgroundColor: "grey", color: "white"}: {}}
                        onClick={()=>{
                          setFrom('7');
                        }}
                      >pound-force/square foot</button>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-10 convert-to converter">
                    To:
                    <input type="number" style={{width: '100%'}}  className="convert-input"
                      value={toValue}
                      onChange={()=>{}}
                    />
                    <div style={{margin: 0, padding: 0, display: 'flex', flexDirection: 'column', overflowY: 'scroll'}} className="converter-options">
                    <button 
                        style={to === '0'? {backgroundColor: "grey", color: "white"}: {}} className="converter-option"
                        onClick={()=>{
                          setTo('0');
                        }}
                      >Standard atomosphere[atm]</button>
                      <button className="converter-option"
                        style={to === '1'? {backgroundColor: "grey", color: "white"}: {}}
                        onClick={()=>{
                          setTo('1');
                        }}
                      >Pascal[Pa]</button>
                      <button className="converter-option"
                        style={to === '2'? {backgroundColor: "grey", color: "white"}: {}}
                        onClick={()=>{
                          setTo('2');
                        }}
                      >psi</button>
                      <button className="converter-option"
                        style={to === '3'? {backgroundColor: "grey", color: "white"}: {}}
                        onClick={()=>{
                          setTo('3');
                        }}
                      >torr</button>
                      <button className="converter-option"
                        style={to === '4'? {backgroundColor: "grey", color: "white"}: {}}
                        onClick={()=>{
                          setTo('4');
                        }}
                      >millimeter mercury(0°C)</button>
                      <button className="converter-option"
                        style={to === '5'? {backgroundColor: "grey", color: "white"}: {}}
                        onClick={()=>{
                          setTo('5');
                        }}
                      >millimeter water(4°C)</button>
                      <button className="converter-option"
                        style={to === '6'? {backgroundColor: "grey", color: "white"}: {}}
                        onClick={()=>{
                          setTo('6');
                        }}
                      >newton/square meter</button>
                      <button className="converter-option"
                        style={to === '7'? {backgroundColor: "grey", color: "white"}: {}}
                        onClick={()=>{
                          setTo('7');
                        }}
                      >pound-force/square foot</button>
                    </div>
                  </div>
                </div>
            </div>
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
            <h2 className="allunits">Common pressure conversions</h2>
            <ul className="allunits">
                <li>1 kilopascal [kPa] = 1000 pascal [Pa]</li>
                <li>1 bar = 100000 pascal [Pa]</li>
                <li>1 psi [psi] = 6894.7572931783 pascal [Pa]</li>
                <li>1 ksi [ksi] = 6894757.2931783 pascal [Pa]</li>
                <li>1 Standard atmosphere [atm] = 101325 pascal [Pa]</li>
                <li>1 exapascal [EPa] = 1.0E+18 pascal [Pa]</li>
                <li>1 petapascal [PPa] = 1.0E+15 pascal [Pa]</li>
                <li>1 terapascal [TPa] = 1000000000000 pascal [Pa]</li>
                <li>1 gigapascal [GPa] = 1000000000 pascal [Pa]</li>
                <li>1 megapascal [MPa] = 1000000 pascal [Pa]</li>
                <li>1 hectopascal [hPa] = 100 pascal [Pa]</li>
                <li>1 dekapascal [daPa] = 10 pascal [Pa]</li>
                <li>1 decipascal [dPa] = 0.1 pascal [Pa]</li>
                <li>1 centipascal [cPa] = 0.01 pascal [Pa]</li>
                <li>1 millipascal [mPa] = 0.001 pascal [Pa]</li>
                <li>1 micropascal [µPa] = 1.0E-6 pascal [Pa]</li>
                <li>1 nanopascal [nPa] = 1.0E-9 pascal [Pa]</li>
                <li>1 picopascal [pPa] = 1.0E-12 pascal [Pa]</li>
                <li>1 femtopascal [fPa] = 1.0E-15 pascal [Pa]</li>
                <li>1 attopascal [aPa] = 1.0E-18 pascal [Pa]</li>
                <li>1 newton/square meter = 1 pascal [Pa]</li>
                <li>1 newton/square centimeter = 10000 pascal [Pa]</li>
                <li>1 newton/square millimeter = 1000000 pascal [Pa]</li>
                <li>1 kilonewton/square meter = 1000 pascal [Pa]</li>
                <li>1 millibar [mbar] = 100 pascal [Pa]</li>
                <li>1 dyne/square centimeter = 0.1 pascal [Pa]</li>
                <li>1 kilogram-force/square meter = 9.80665 pascal [Pa]</li>
                <li>1 kilogram-force/sq. cm = 98066.5 pascal [Pa]</li>
                <li>1 kilogram-force/sq. millimeter = 9806650 pascal [Pa]</li>
                <li>1 gram-force/sq. centimeter = 98.0665 pascal [Pa]</li>
                <li>1 ton-force (short)/sq. foot = 95760.517960678 pascal [Pa]</li>
                <li>1 ton-force (short)/sq. inch = 13789514.586338 pascal [Pa]</li>
                <li>1 ton-force (long)/square foot = 107251.78011595 pascal [Pa]</li>
                <li>1 ton-force (long)/square inch = 15444256.336697 pascal [Pa]</li>
                <li>1 kip-force/square inch = 6894757.2931783 pascal [Pa]</li>
                <li>1 pound-force/square foot = 47.8802589804 pascal [Pa]</li>
                <li>1 pound-force/square inch = 6894.7572931783 pascal [Pa]</li>
                <li>1 poundal/square foot = 1.4881639436 pascal [Pa]</li>
                <li>1 torr [Torr] = 133.3223684211 pascal [Pa]</li>
                <li>1 centimeter mercury (0°C) = 1333.22 pascal [Pa]</li>
                <li>1 millimeter mercury (0°C) = 133.322 pascal [Pa]</li>
                <li>1 inch mercury (32°F) [inHg] = 3386.38 pascal [Pa]</li>
                <li>1 inch mercury (60°F) [inHg] = 3376.85 pascal [Pa]</li>
                <li>1 centimeter water (4°C) = 98.0638 pascal [Pa]</li>
                <li>1 millimeter water (4°C) = 9.80638 pascal [Pa]</li>
                <li>1 inch water (4°C) [inAq] = 249.082 pascal [Pa]</li>
                <li>1 foot water (4°C) [ftAq] = 2988.98 pascal [Pa]</li>
                <li>1 inch water (60°F) [inAq] = 248.843 pascal [Pa]</li>
                <li>1 foot water (60°F) [ftAq] = 2986.116 pascal [Pa]</li>
                <li>1 atmosphere technical [at] = 98066.500000003 pascal [Pa]</li>
            </ul>
            </div>
            </div>
        </div>
    );
}

export default PressConv;