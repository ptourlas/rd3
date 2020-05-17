import React from 'react'
import ReactDOM from 'react-dom'
import * as d3 from 'd3'

class Edge extends React.Component {

	componentDidMount() {
		this.d3Link = d3.select(ReactDOM.findDOMNode(this))
			.datum(this.props.data)
			.call(this.props.d3tools.enterLink)
	}

	render() {
		return (
			<>
				<g  className='link'>
				
					<line/>
					
					<text onClick={this.handleClick} > 
						{this.props.data.predicate} 
					</text>
				</g>
			</>
		)
	}

}

export default Edge 