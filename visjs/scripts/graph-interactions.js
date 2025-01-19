import nodeData from './nodeData.js';

// Generate nodes and edges from the provided data
function generateNodes(data) {
    const generatedNodes = [];
    data.forEach((item) => {
        generatedNodes.push({
            id: item.ID,
            label: item.NodeName,
            title: item.Description,
            fixed: false, // Allow dragging
            group: "frontend",
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

// Initialize the graph
const nodes = new vis.DataSet(generateNodes(nodeData));
const edges = new vis.DataSet(generateEdges(nodeData));

const container = document.getElementById('mynetwork');
const data = { nodes: nodes, edges: edges };

const options = {
    manipulation: {
        enabled: true, // Enable edge and node manipulation
        addEdge: function (edgeData, callback) {
            if (edgeData.from !== edgeData.to) {
                callback(edgeData); // Allow the new edge
                saveGraph(); // Save changes after adding
            } else {
                alert("Self-loops are not allowed.");
                callback(null); // Reject the edge
            }
        },
        editEdge: function (edgeData, callback) {
            callback(edgeData); // Allow edge edit
            saveGraph(); // Save changes after editing
        },
        deleteEdge: function (data, callback) {
            callback(data); // Allow edge deletion
            saveGraph(); // Save changes after deletion
        },
    },
    nodes: {
        shape: "dot",
        size: 16,
        borderWidth: 3,
        shadow: true,
    },
    groups: {
        frontend: {
            shape: "dot",
            color: { background: "#2596be", border: "#2180A3" },
            font: { color: "black" },
        },
    },
    physics: false,
};

const network = new vis.Network(container, data, options);

// Save the graph to localStorage
function saveGraph() {
    const currentNodes = nodes.get();
    const currentEdges = edges.get();

    localStorage.setItem("nodes", JSON.stringify(currentNodes));
    localStorage.setItem("edges", JSON.stringify(currentEdges));

    console.log("Graph saved.");
}

// Load the graph from localStorage
function loadGraph() {
    const savedNodes = JSON.parse(localStorage.getItem("nodes"));
    const savedEdges = JSON.parse(localStorage.getItem("edges"));

    if (savedNodes) {
        nodes.clear();
        nodes.add(savedNodes);
    }
    if (savedEdges) {
        edges.clear();
        edges.add(savedEdges);
    }

    console.log("Graph loaded.");
}

// Load saved graph data on page load
loadGraph();

// Save node positions on drag end
network.on("dragEnd", function (params) {
    saveGraph();
});
