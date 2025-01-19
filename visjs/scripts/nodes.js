import nodeData from './nodeData.js';

function generateNodes(data) {
    const generatedNodes = [];

    data.forEach((item, index) => {
        generatedNodes.push({
            id: item.ID,
            label: item.NodeName,
            title: item.Description,
            fixed: true,
            x: Math.random() * 800, // Random x position within a range
            y: Math.random() * 600  // Random y position within a range
        });
    });

    return generatedNodes;
}

function generateEdges(data) {
    const generatedEdges = [];

    data.forEach((item) => {
        if (item.from !== undefined) {
            generatedEdges.push({
                from: item.from,
                to: item.ID
            });
        }
    });

    return generatedEdges;
}

// TEST
// console.log(generateNodes(nodeData));
// console.log(generateEdges(nodeData));

// create an array with nodes
var nodes = new vis.DataSet(generateNodes(nodeData));

// create an array with edges
var edges = new vis.DataSet(generateEdges(nodeData));

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