const petersen_graph = {
	nodes: [
		{
			"id": "1",
			"degree": 0,
		},
		{
			"id": "2",
			"degree": 0,
		},
		{
			"id": "3",
			"degree": 0,
		},
		{
			"id": "4",
			"degree": 0,
		},
		{
			"id": "5",
			"degree": 0,
		},
		{
			"id": "6",
			"degree": 0,
		},
		{
			"id": "7",
			"degree": 0,
		},
		{
			"id": "8",
			"degree": 0,
		},
		{
			"id": "9",
			"degree": 0,
		},
		{
			"id": "10",
			"degree": 0,
		}
	],

	links: [
		{
			"source": 1,
			"target": 2,
			"linkID": Math.floor(Math.random()*1000),
		},
		{
			"source": 2,
			"target": 3,
			"linkID": Math.floor(Math.random()*1000),
		},
		{
			"source": 3,
			"target": 4,
			"linkID": Math.floor(Math.random()*1000),
		},
		{
			"source": 4,
			"target": 5,
			"linkID": Math.floor(Math.random()*1000),
		},
		{
			"source": 5,
			"target": 1,
			"linkID": Math.floor(Math.random()*1000),
		},
		{
			"source": 6,
			"target": 1,
			"linkID": Math.floor(Math.random()*1000),
		},
		{
			"source": 2,
			"target": 7,
			"linkID": Math.floor(Math.random()*1000),
		},
		{
			"source": 3,
			"target": 8,
			"linkID": Math.floor(Math.random()*1000),
		},
		{
			"source": 4,
			"target": 9,
			"linkID": Math.floor(Math.random()*1000),
		},
		{
			"source": 5,
			"target": 10,
			"linkID": Math.floor(Math.random()*1000),
		},
		{
			"source": 6,
			"target": 9,
			"linkID": Math.floor(Math.random()*1000),
		},
		{
			"source": 6,
			"target": 8,
			"linkID": Math.floor(Math.random()*1000),
		},
		{
			"source": 7,
			"target": 9,
			"linkID": Math.floor(Math.random()*1000),
		},
		{
			"source": 7,
			"target": 10,
			"linkID": Math.floor(Math.random()*1000),
		},
		{
			"source": 8,
			"target": 10,
			"linkID": Math.floor(Math.random()*1000),
		},
	]
}

export default petersen_graph
