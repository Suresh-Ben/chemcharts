import React from "react";

import './Convs.css';

function Convs() {

    const convs = [
        {
          id: 0,
          link: 'temp-conv',
          title: 'Temprature conversion',
          disc: 'convert temperature between Celsius, Fahrenheit, Kelvin and Rankine'
        },
        {
          id: 1,
          link: 'press-conv',
          title: 'Pressure conversion',
          disc: 'convert pressure between pascal, bar, atm etc'
        },
        {
          id: 2,
          link: 'power-conv',
          title: 'Power conversion',
          disc: 'convert power between watt, Btu, Calorie, horsepower etc'
        },
        {
          id: 3,
          link: 'angle-conv',
          title: 'Angle conversion',
          disc: 'convert angle between degree, radian, minute, grad etc'
        },
        {
          id: 4,
          link: 'length-conv',
          title: 'Length conversion',
          disc: 'convert length between meter, yard, foot, inch etc'
        },
        {
          id: 5,
          link: 'volume-conv',
          title: 'Volume conversion',
          disc: 'convert volume between cubic meter, liter, gallon, cubic yard etc'
        },
        {
          id: 6,
          link: 'area-conv',
          title: 'Area conversion',
          disc: 'convert area between square meter, square yard, acre etc'
        },
        {
          id: 7,
          link: 'energy-conv',
          title: 'Energy conversion',
          disc: 'convert energy between joule, watt-hour, calorie, Btu etc'
        },
        {
          id: 8,
          link: 'force-conv',
          title: 'Force conversion',
          disc: 'covert force between newton, pound-force, ton-force, dyne etc'
        },
        {
          id: 9,
          link: 'speed-conv',
          title: 'Speed conversion',
          disc: 'convert speed between meter/sec, foot/hour, yard/hour etc'
        },
        {
          id: 10,
          link: 'fuel-conv',
          title: 'Fuel conversion',
          disc: 'convert fuel-conevrion between meter/liter, km/gallon, meter/pint etc'
        },
        {
          id: 11,
          link: 'currency-conv',
          title: 'Currency conversion',
          disc: 'convert current between INR, USD, EURO, CAD etc'
        },
        {
          id: 12,
          link: 'density-conv',
          title: 'Density conversion',
          disc: 'convert density between gram/cubic-meter, deci-gram/liter, pound/gallon etc'
        },
        {
          id: 13,
          link: 'thermal-conductivy-conv',
          title: 'Thermal conductivity conversion',
          disc: 'convert density between gram/cubic-meter, deci-gram/liter, pound/gallon etc'
        },
        {
          id: 14,
          link: 'thermal-expansion-conv',
          title: 'Thermal Expansion conversion',
          disc: 'convert density between gram/cubic-meter, deci-gram/liter, pound/gallon etc'
        },
        {
          id: 15,
          link: 'thermal-resistance-conv',
          title: 'Thermal Resistance conversion',
          disc: 'convert density between gram/cubic-meter, deci-gram/liter, pound/gallon etc'
        },
        {
          id: 16,
          link: 'flow-rate-conv',
          title: 'Flow rate conversion',
          disc: ''
        }
    ];

    return(
        <section id="convs" className="convs">

            <div className="container">

              <h1>Conversions</h1>

              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Conversion</th>
                    <th className="table-disc" scope="col">Discription</th>
                  </tr>
                </thead>
              </table>

              <div className="scrollable">

                <table className="table table-striped">
                  <tbody className="conv-container">

                    {convs.map((conv) => {
                        return(
                            <tr key={conv.id}>
                                <td>
                                  <a href={"/" + conv.link} style={{textDecoration: 'none'}}>
                                    {conv.title}
                                  </a>
                                </td>
                                <td>{conv.disc}</td>
                            </tr>
                        )
                    })}

                  </tbody>

                </table>

              </div>
            </div>

        </section>
    );
}

export default Convs;