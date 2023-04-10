import React from "react";

import './Graphs.css';

function Graphs() {

    const graphs = [
        {
            id: 0,
            link: 'binary-graph',
            title: 'Binary Graph',
            disc: 'Txy graph, get equilibrium concentrations of binary mixture'
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