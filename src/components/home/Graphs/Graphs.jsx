import React from "react";

import './Graphs.css';

function Graphs() {

    const graphs = [
      {
        id: 0,
        link: 'binary-txy-graph',
        title: 'Binary Graph(Txy)',
        disc: 'Txy, are graphical representations of the relationship between temperature, composition, and vapor-liquid equilibrium conditions for a binary mixture at constant pressure.'
      },
      {
        id: 0,
        link: 'binary-pxy-graph',
        title: 'Binary Graph(Pxy)',
        disc: 'Pxy, are graphical representations of the relationship between pressure, composition, and vapor-liquid equilibrium conditions for a binary mixture at constant Temperature.'
      },
      {
        id: 0,
        link: 'binary-xy-graph',
        title: 'Binary Graph(xy)',
        disc: 'xy diagram is a graphical representation of the composition of a binary mixture in the liquid phase versus the composition of the same binary mixture in the vapor phase at a given temperature and pressure'
      },
      {
        id: 0,
        link: 'mollier-graph',
        title: 'Mollier Charts',
        disc: 'Mollier charts are graphical representations of enthalpy and entropy as a function of temperature and pressure, commonly used in thermodynamics.'
      },
      {
        id: 0,
        link: 'mollier-graph',
        title: 'Ternary phase diagrams',
        disc: 'Ternary phase diagrams are triangular diagrams used to understand the behavior of mixtures of three substances and to determine the composition and properties of the phases present in a ternary system.'
      },
      {
        id: 0,
        link: 'mollier-graph',
        title: 'McCabe-Thiele',
        disc: 'The McCabe-Thiele diagram is a graphical method used to determine the number of plates required for distillation based on the vapor-liquid equilibrium relationship between two components'
      }
    ];

    return(
        <section id="graphs" className="graphs">
                <div className="container">

                  <h1>Graphs</h1>

                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Graph Name</th>
                        <th className="table-disc" scope="col">Discription</th>
                      </tr>
                    </thead>
                  </table>

                  <div className="scrollable">

                    <table className="table table-striped">
                      <tbody className="graphs-container">

                        {graphs.map((graph) => {
                            return(
                                <tr key={graph.id}>
                                    <td>
                                      <a href={"/" + graph.link} style={{textDecoration: 'none'}}>
                                        {graph.title}
                                      </a>
                                    </td>
                                    <td>{graph.disc}</td>
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

export default Graphs;