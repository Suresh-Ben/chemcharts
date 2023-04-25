import React, {useState, useEffect} from "react";

import './TempConv.css';
import Navbar from '../../requires/Navbar';
import About from '../../requires/About';

function TempConv() {

    const [from, setFrom] = useState('0');
    const [to, setTo] = useState('0');
    const [fromValue, setFromValue] = useState('');
    const [toValue, setToValue] = useState('');

    function truncateDecimals(number) {
      var ans = Math.round(number*100);
      return ans/100;
    };

    function convertCelcius() {
      if(fromValue === '') {
        setToValue('');
        return;
      }

      let cel = Number(fromValue);
      if(to === '0') {
        setToValue(cel);
        return;
      }
      if(to === '1'){
        let fahr = truncateDecimals((cel * 9)/5  + 32);
        setToValue(fahr);
      }
      else if(to === '2'){
        let kelv = truncateDecimals(cel + 273.15);
        setToValue(kelv);
      }
      else if(to === '3'){
        let rank = truncateDecimals(((cel + 273.15)*9)/5);
        setToValue(rank);
      }
    }

    function convertKelvin() {
      if(fromValue === '') {
        setToValue('');
        return;
      }

        const kelv = Number(fromValue);
        if(to === '1') setToValue(kelv);
        else if(to === '0'){
          let cel = truncateDecimals(kelv - 273.15);
          setToValue(cel);
        }
        else if(to === '2'){
          let fahr = truncateDecimals((kelv*9)/5 - 459.67);
          setToValue(fahr);
        }
        else if(to === '3'){
          let rank = truncateDecimals(kelv*9)/5;
          setToValue(rank);
        }
    }

    function convertFahrenheit() {
      if(fromValue === '') {
        setToValue('');
        return;
      }

      const fahr = Number(fromValue);
      if(to === '2') setToValue(fahr);
      else if(to === '0'){
        let cel = truncateDecimals(((fahr - 32)*5)/9);
        setToValue(cel);
      }
      else if(to === '1'){
        let kelv = truncateDecimals(((fahr + 459.67)*5)/9);
        setToValue(kelv)
      }
      else if(to === '3'){
        let rank = truncateDecimals(fahr + 459.67);
        setToValue(rank);
      }
    }

    function convertRankin() {
      if(fromValue === '') {
        setToValue('');
        return;
      }
    
      const rank = Number(fromValue);
      if(to === '3') setToValue(rank);
      else if(to === '0'){
        let cel = truncateDecimals(((rank - 491.67)*5)/9);
        setToValue(cel);
      }
      else if(to === '1'){
        let kelv = truncateDecimals((rank*5)/9);
        setToValue(kelv)
      }
      else if(to === '2'){
        let fahr = truncateDecimals(rank - 459.67);
        setToValue(fahr);
      }
    }

    useEffect(()=>{
      if(from === '0')
        convertCelcius();
      else if(from === '1')
        convertKelvin();
      else if(from === '2')
        convertFahrenheit();
      else if(from === '3')
        convertRankin();
    },[from, to, fromValue]);
  
    return(
        <div>
            <Navbar />
            <div className="temp-body">
            <div className="container">

                <h2 className="topic">Celsius, Fahrenheit, Kelvin and Rankine Converter</h2>
                <div className="row justify-content-center align-items-center">
                <div className="row converter-area">
                <div className="col-lg-6 col-sm-10 convert-from converter">
                    From:
                    <input type="number" style={{width: '100%'}}  className="convert-input"
                      value={fromValue}
                      onChange={e=>setFromValue(e.target.value)}
                    />
                    <div style={{margin: 0, padding: 0, display: 'flex', flexDirection: 'column', overflowY: 'scroll'}} className="converter-options">
                      <button 
                        style={from === '0'? {backgroundColor: "grey", color: "white"}: {}} className="converter-option"
                        onClick={()=>{
                          setFrom('0');
                        }}
                      >Celsius</button>
                      <button className="converter-option"
                        style={from === '1'? {backgroundColor: "grey", color: "white"}: {}}
                        onClick={()=>{
                          setFrom('1');
                        }}
                      >Kelvin</button>
                      <button className="converter-option"
                        style={from === '2'? {backgroundColor: "grey", color: "white"}: {}}
                        onClick={()=>{
                          setFrom('2');
                        }}
                      >Fahrenheit</button>
                      <button className="converter-option"
                        style={from === '3'? {backgroundColor: "grey", color: "white"}: {}}
                        onClick={()=>{
                          setFrom('3');
                        }}
                      >Rankine</button>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-10 convert-to converter">
                    To:
                    <input type="number" style={{width: '100%'}}  className="convert-input"
                      value={toValue}
                    />
                    <div style={{margin: 0, padding: 0, display: 'flex', flexDirection: 'column', overflowY: 'scroll'}} className="converter-options">
                      <button className="converter-option"
                        style={to === '0'? {backgroundColor: 'grey'}: {}}
                        onClick={()=>{
                          setTo('0');
                        }}
                      >Celsius</button>
                      <button className="converter-option"
                        style={to === '1'? {backgroundColor: 'grey'}: {}}
                        onClick={()=>{
                          setTo('1');
                        }}
                      >Kelvin</button>
                      <button className="converter-option"
                        style={to === '2'? {backgroundColor: 'grey'}: {}}
                        onClick={()=>{
                          setTo('2');
                        }}
                      >Fahrenheit</button>
                      <button className="converter-option"
                        style={to === '3'? {backgroundColor: 'grey'}: {}}
                        onClick={()=>{
                          setTo('3');
                        }}
                      >Rankine</button>
                    </div>
                  </div>
                </div>
                </div>

                <div className="formulai row align-items-center">

                  <h4>Conversion Formulae</h4>
                  <p>The conversion formulae to convert between Kelvin, Celsius, Fahrenheit and Rankine are as follows:</p>

                  <div className="col-lg-5 col-md-5">
                    <p>Conversions to <a style={{textDecoration: 'none'}} href="https://en.wikipedia.org/wiki/Celsius">Celsius</a></p>
                    <ul>
                      <li>°C = K - 273.15</li>
                      <li>°C = (°F - 32) x 5/9</li>
                      <li>°C = (°R - 491.67) x 5/9</li>
                    </ul>
                  </div>

                  <div className="col-lg-5 col-md-5">
                    <p>Conversions to <a style={{textDecoration: 'none'}} href="https://en.wikipedia.org/wiki/Fahrenheit">Fahrenheit</a></p>
                    <ul>
                      <li>°F = (K x 9/5) - 459.67</li>
                      <li>°F = (°C x 9/5) + 32</li>
                      <li>°F = °R - 459.67</li>
                    </ul>
                  </div>

                  <div className="col-lg-5 col-md-5">
                    <p>Conversions to <a style={{textDecoration: 'none'}} href="https://en.wikipedia.org/wiki/Kelvin">Kelvin</a></p>
                    <ul>
                      <li>K = °C + 273.15</li>
                      <li>K = (°F + 459.67) x 5/9</li>
                      <li>K = °R x 5/9</li>
                    </ul>
                  </div>

                  <div className="col-lg-5 col-md-5">
                    <p>Conversions to <a style={{textDecoration: 'none'}} href="https://en.wikipedia.org/wiki/Rankine_scale">Rankine</a></p>
                    <ul>
                      <li>°R = K x 9/5</li>
                      <li>°R = (°C + 273.15) x 9/5</li>
                      <li>°R = °F + 459.67</li>
                    </ul>
                  </div>

                </div>

            </div>
            </div>

            <About />
        </div>
    );
}

export default TempConv;