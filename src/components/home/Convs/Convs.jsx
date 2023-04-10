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