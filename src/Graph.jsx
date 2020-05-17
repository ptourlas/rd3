import React from 'react'
import * as d3 from 'd3'
import D3Tools from './D3'
import Vertex from './Vertex.jsx'
import Edge from './Edge.jsx'

class Graph extends React.Component {
	constructor(props) {
		super(props)

		this.d3tools = D3Tools()
		this.zoom = d3.zoom()
			.on("zoom", this.zoomEvent.bind(this))
			.scaleExtent([0.05, 2])	
		this.updateDimensions = this.updateDimensions.bind(this) 

		// the ctor is the ONLY place where the state
		// can be directly assigned like this 
		this.state = {

			//------ INHERITED FROM PARENT COMPONENT --------//
			nodes: this.props.data.nodes,
			links: this.props.data.links, 
			
			//---------------- MISCELLANEOUS ----------------//
			width: window.innerWidth,
			height: window.innerHeight 
		}	
	}


	//--------------- LIFECYCLE METHODS --------------------//
	componentDidMount() {
		this.initGraph()
		this.findNodeDeg(this.state.links)
		d3.select(this.refs.svg).call(this.zoom)
		window.addEventListener("resize", this.updateDimensions)
	}

	componentDidUpdate() {
		d3.select(this.refs.svg).call(this.zoom)
		this.initGraph()
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions)
	}		
	

	//----------------- D3-RELATED METHODS -----------------//
	initGraph() {
		const data = this.state
		this.d3tools.initForce(data.nodes, data.links)
		this.d3tools.tick(this)
	}
	
	zoomEvent() {
		const contentWrap = d3.select('#contentWrap');
		const { k, x, y } = d3.event.transform;
		contentWrap.attr('transform', `translate(${x},${y}) scale(${k})`);
	}
	//------------------------------------------------------//

	updateDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight })
	}

	findNodeDeg(links) {
		if (links !== null){
			links.forEach(link => {
				link.source.degree += 1
				link.target.degree += 1	
			})
		}	
	}

	render() {
		const d3tools = this.d3tools
		const nodes = this.state.nodes
		const links = this.state.links 
		const id = this.state.id 
		
		return (
			<div className="container__graph" key={id} value='petersen'>
				<svg className="container__graph" width={this.state.width} height={this.state.height} ref="svg">
					<g id="contentWrap">
						{links.map((link) => {
							return (<Edge data={link} d3tools={d3tools}	key={link.linkID} />)
						})}

						{nodes.map((node) => {
							return (<Vertex data={node} d3tools={d3tools} key={node.id} />)
						})}
					</g>
				</svg>
			</div>
		)
	}
}

export default Graph