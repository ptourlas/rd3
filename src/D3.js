import ReactDOM from 'react-dom'
import * as d3 from 'd3'

function D3Tools() {

	var width = window.innerWidth, height = window.innerHeight, 
	
	obj = {},

	initForce = (nodes, links) => {
		obj.force = d3.forceSimulation(nodes)
			.force("charge", d3.forceManyBody().strength(-1500))
			.force("link", d3.forceLink(links).id(function(d) { return d.id; }).distance(1000))
			.force("center", d3.forceCenter(nodes).x(obj.width / 2).y(obj.height / 2))
			.force("collide", d3.forceCollide([85]).iterations([5]))
	},

	tick = (DOMnode) => {
		var d3Graph = d3.select(ReactDOM.findDOMNode(DOMnode)).select('svg')
		obj.force.on('tick', () => { d3Graph.call(updateGraph) })
	},

	updateGraph = (selection) => {
		selection.selectAll('.node').call(updateNode)
		selection.selectAll('.link').call(updateLink)
	},
	
	updateNode = (selection) => {
		selection.attr("transform", (d) => "translate(" + d.x + "," + d.y + ")")
	},

	updateLink = (selection) => {
		selection.select("line")
			.attr("x1", (d) => d.source.x)
			.attr("y1", (d) => d.source.y)
			.attr("x2", (d) => d.target.x)
			.attr("y2", (d) => d.target.y)
		selection.select("text")
			.attr("x", (d) => d.source.x/2 + d.target.x/2 )
			.attr("y", (d) => d.source.y/2 + d.target.y/2 )
			.style("fill", "black")
			.style("text-anchor", "middle")
			.style("alignment-baseline", "middle")
			.style("font-size", "24px")
			.style("font-family", "monospace")
	},

	enterNode = (selection) => {
		selection.select('path')
			.style("fill", "black")
		selection.select('text')
			.style("fill", "black")
			.style("font-weight", "600")
			.style("text-transform", "uppercase")
			.style("text-anchor", "middle")
			.style("alignment-baseline", "middle")
			.style("font-size", "24px")
			.style("font-family", "monospace")
	},

	enterLink = (selection) => {
		selection.select("line")
			.attr("stroke-width", 15)
			.attr("opacity", 0.3)
			.attr("stroke", "black")
	},

	dragStarted = (d) => {
		if (!d3.event.active) obj.force.alpha(0.5).restart()
	},

	dragging = (d) => {
		d.fx = d3.event.x
		d.fy = d3.event.y
	},

	dragEnded = (d) => {
		if (!d3.event.active) obj.force.alpha(0.5).restart()
		//if (!d3.event.active) obj.force.stop()
		
		//d.x = d.fx
		//d.y = d.fy

		//console.log(d)
		//d.fx = null
		//d.fy = null 
	}

	obj.addDragHandlerToNode = function (node) {
		node.call(d3.drag()
			.on("start", dragStarted)
			.on("drag", dragging)
			.on("end", dragEnded)
		)
	}

	obj.initForce = initForce
	obj.tick = tick

	obj.width = width
	obj.height = height

	obj.enterNode = enterNode
	obj.updateNode = updateNode

	obj.enterLink = enterLink
	obj.updateLink = updateLink

	obj.dragStarted = dragStarted
	obj.dragging = dragging
	obj.dragEnded = dragEnded
	
	return obj
}

export default D3Tools