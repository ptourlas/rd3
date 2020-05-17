import React from 'react'
import ReactDOM from 'react-dom'
import Graph from './Graph'

import petersen_graph from './petersen_graph'

ReactDOM.render(
    <Graph data={petersen_graph} />, 
document.getElementById('root'));