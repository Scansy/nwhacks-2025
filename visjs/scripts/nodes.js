// create an array with nodes
var nodes = new vis.DataSet([
    { id: 1, label: 'Node 1', fixed: true, x: 0, y: 0 },
    { id: 2, label: 'Node 2', fixed: true, x: 100, y: 0 },
    { id: 3, label: 'Node 3', fixed: true, x: 200, y: 0 },
    { id: 4, label: 'Node 4', fixed: true, x: 300, y: 0 },
    { id: 5, label: 'Node 5', fixed: true, x: 400, y: 0 }
]);

// create an array with edges
var edges = new vis.DataSet([
    { from: 1, to: 3 },
    { from: 1, to: 2 },
    { from: 2, to: 4 },
    { from: 2, to: 5 }
]);

// create a network
var container = document.getElementById('mynetwork');

// provide the data in the vis format
var data = {
    nodes: nodes,
    edges: edges
};
var options = {
    physics: false
};

// initialize your network!
var network = new vis.Network(container, data, options);

// add event listener for click events
network.on("click", function (params) {
    if (params.nodes.length > 0) {
        var nodeId = params.nodes[0];
        nodes.update({ id: nodeId, color: { background: 'red' } });
    }
});