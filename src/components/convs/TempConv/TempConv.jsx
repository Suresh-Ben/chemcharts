import React, {useState} from "react";

import './TempConv.css';
import Navbar from '../../requires/Navbar';
import About from '../../requires/About';

function TempConv() {

    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');
    const [kelvin, setKelvin] = useState('');
    const [rankine, setRankine] = useState('');

    function truncateDecimals(number) {
        var ans = Math.round(number*100);
        return ans/100;
    };

    function resetScales() {
        setCelsius('');
        setFahrenheit('');
        setKelvin('');
        setRankine('');
    }

    function convertCelsius(cel) {
        if(cel === '') {
            resetScales();
            return;
        }
        cel = Number(cel);
        let fahr = truncateDecimals((cel * 9)/5  + 32);
        let kelv = truncateDecimals(cel + 273.15);
        let rank = truncateDecimals(((cel + 273.15)*9)/5);

        setFahrenheit(fahr);
        setKelvin(kelv);
        setRankine(rank);
    }

    function convertFahrenheit(fahr) {
        if(fahr === '') {
            resetScales();
            return;
        }
        fahr = Number(fahr);
        let cel = truncateDecimals(((fahr - 32)*5)/9);
        let kelv = truncateDecimals(((fahr + 459.67)*5)/9);
        let rank = truncateDecimals(fahr + 459.67);

        setCelsius(cel);
        setKelvin(kelv);
        setRankine(rank);
    }

    function convertKelvin(kelv) {
        if(kelv === '') {
            resetScales();
            return;
        }
        kelv = Number(kelv);
        let cel = truncateDecimals(kelv - 273.15);
        let fahr = truncateDecimals((kelv*9)/5 - 459.67);
        let rank = truncateDecimals(kelv*9)/5;

        setCelsius(cel);
        setFahrenheit(fahr);
        setRankine(rank);
    }

    function convertRankine(rank) {
        if(rank === '') {
            resetScales();
            return;
        }
        rank = Number(rank);
        let cel = truncateDecimals(((rank - 491.67)*5)/9);
        let fahr = truncateDecimals(rank - 459.67);
        let kelv = truncateDecimals((rank*5)/9);

        setCelsius(cel);
        setFahrenheit(fahr);
        setKelvin(kelv);
    }

    return(
        <div>
            <Navbar />

            <div className="temp-body">
            <div className="container">

                <h2 className="topic">Celsius, Fahrenheit, Kelvin and Rankine Converter</h2>

                <div className="row align-items-center justify-content-center">

                  <div className="col-lg-5 col-md-5 temp-col">
                    <h1>Celsius</h1>
                    <input className="celsius my-input" placeholder="temprature(°C)" type="number" value={celsius} 
                        onChange={(e) => {
                            setCelsius(e.target.value);
                            convertCelsius(e.target.value);
                        }}
                    />
                  </div>
                  <div className="col-lg-5 col-md-5 temp-col">
                    <h1>Fahrenheit</h1>
                    <input className="fahrenheit my-input" placeholder="temprature(°F)" type="number" value={fahrenheit} 
                        onChange={(e) => {
                            setFahrenheit(e.target.value);
                            convertFahrenheit(e.target.value);
                        }}
                    />
                  </div>
                  <div className="col-lg-5 col-md-5 temp-col">
                    <h1>Kelvin</h1>
                    <input className="kelvin my-input" placeholder="temprature(K)" type="number" value={kelvin} 
                        onChange={(e) => {
                            setKelvin(e.target.value);
                            convertKelvin(e.target.value);
                        }}
                    />
                  </div>
                  <div className="col-lg-5 col-md-5 temp-col">
                    <h1>Rankine</h1>
                    <input className="rankine my-input" placeholder="temprature(°R)" type="number" value={rankine} 
                        onChange={(e) => {
                            setRankine(e.target.value);
                            convertRankine(e.target.value);
                        }}
                    />
                  </div>

                </div>

                <div className="pt-2 d-flex justify-content-center">
                  <button className="btn btn-outline-primary mx-2 px-3 py-0 reset"
                    onClick={()=>{
                        resetScales();
                    }}
                  >
                    Reset
                </button>
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