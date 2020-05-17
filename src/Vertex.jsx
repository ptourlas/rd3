import React from 'react'
import ReactDOM from 'react-dom'
import * as d3 from 'd3'
import icon_paths from './icon_paths'

class Vertex extends React.Component {
	
	componentDidMount() {
		this.d3Node = d3.select(ReactDOM.findDOMNode(this))
			.datum(this.props.data)
		this.d3Node.call(this.props.d3tools.addDragHandlerToNode)
		this.d3Node.call(this.props.d3tools.enterNode)
	}

	render() {
		return (
			<>	
				<g className='node'>		
					<path 
						fill="black" 
						transform="translate(-20,-60) scale(0.25)"
						d={icon_paths.vertex}>
					</path>

					<text y="-80px"> 
						{this.props.data.id} 
					</text>

				</g>
			</>		
		)
	}
}

export default Vertex