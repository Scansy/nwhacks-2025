import nodeData from './testData.js';

// Function to save current state to localStorage
function saveCurrentState() {
    const nodes = network.body.data.nodes.get();
    const edges = network.body.data.edges.get();
    const positions = network.getPositions();  // Get all positions at once
    
    // Format each node to match the original structure
    const formattedNodes = nodes.map(node => {
        const pos = positions[node.id];  // Get position for this specific node
        return {
            "ID": node.id,
            "NodeName": node.label,
            "Description": node.Description,
            "from": edges.find(edge => edge.to === node.id)?.from,
            "x": pos ? Math.round(pos.x) : 0,  // Add fallback if position is undefined
            "y": pos ? Math.round(pos.y) : 0   // Add fallback if position is undefined
        };
    });

    // Sort nodes by ID to maintain consistent order
    formattedNodes.sort((a, b) => a.ID - b.ID);

    // Create the final string in the exact format
    const finalString = 'const data = ' + JSON.stringify(formattedNodes, null, 2) + ';\n\nexport default data;';

    // Save to localStorage
    localStorage.setItem('nodeData', finalString);
    console.log('Saved:', finalString);
}

// Create save button
const saveButton = document.createElement('button');
saveButton.innerHTML = 'Save Graph State';
saveButton.style.position = 'fixed';
saveButton.style.bottom = '20px';
saveButton.style.right = '20px';
saveButton.style.padding = '10px 20px';
saveButton.style.backgroundColor = '#4CAF50';
saveButton.style.color = 'white';
saveButton.style.border = 'none';
saveButton.style.borderRadius = '5px';
saveButton.style.cursor = 'pointer';
saveButton.style.zIndex = '1000';

// Add hover effect
saveButton.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#45a049';
});
saveButton.addEventListener('mouseout', function() {
    this.style.backgroundColor = '#4CAF50';
});

// Add click handler
saveButton.addEventListener('click', saveCurrentState);

// Add button to document
document.body.appendChild(saveButton);

function generateNodes(data) {
    const generatedNodes = [];
    data.forEach((item) => {
        generatedNodes.push({
            id: item.ID,
            label: item.NodeName,
            Description: item.Description,
            fixed: false,
            group: "frontend",
            x: item.x,
            y: item.y
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

// Create arrays with nodes and edges
var nodes = new vis.DataSet(generateNodes(nodeData));
var edges = new vis.DataSet(generateEdges(nodeData));

// Create a network
var container = document.getElementById('mynetwork');

// Provide the data in the vis format
var data = {
    nodes: nodes,
    edges: edges
};

var options = {
    manipulation: {
        enabled: true,
        addNode: function (nodeData, callback) {
            nodeData.label = prompt("Enter node label:", "New Node");
            if (nodeData.label) {
                callback(nodeData);
            } else {
                callback(null);
            }
        },
        editNode: function (nodeData, callback) {
            nodeData.label = prompt("Edit node label:", nodeData.label);
            if (nodeData.label) {
                callback(nodeData);
            } else {
                callback(null);
            }
        },
        addEdge: function (edgeData, callback) {
            if (edgeData.from !== edgeData.to) {
                callback(edgeData);
            } else {
                alert("Self-loops are not allowed.");
                callback(null);
            }
        },
        editEdge: function (edgeData, callback) {
            callback(edgeData);
        },
        deleteNode: true,
        deleteEdge: true,
    },
    nodes: {
        shape: "dot",
        size: 16,
        borderWidth: 3,
        shadow: true
    },
    groups: {
        frontend: {
            shape: "dot",
            color: { background: "#2596be", border: "#2180A3" },
            font: { color: "black" },
            borderWidth: 2,
            shadow: true,
        },
    },
    physics: false,
};

var completedNodes = [];
// Initialize network
var network = new vis.Network(container, data, options);

// Event listener for node clicks
network.on("click", function (params) {
    if (params.nodes.length > 0) {
        const nodeId = params.nodes[0];
        const nodeData = nodes.get(nodeId);
        const pointerPos = params.pointer.DOM;

        floatingInfo.innerHTML = `
            <strong>${nodeData.label}</strong><br>
            ${nodeData.title}<br>
            <div class="button-container">
                <button id="completeButton" class="complete-button button">Complete</button>
                <button id="inProgressButton" class="inProgress-button button">In-Progress</button>
                <button id="removeButton" class="remove-button button">Remove</button>
            </div>
        `;

        floatingInfo.style.left = `${pointerPos.x + 10}px`;
        floatingInfo.style.top = `${pointerPos.y + 10}px`;
        floatingInfo.style.display = "block";

        // Add event listeners to the buttons
        document.getElementById('completeButton').addEventListener('click', function () {
            //add completed nodes id copy to global completed skills array
            completedNodes.push(nodeId);
            nodes.update({ id: nodeId, color: { background: 'lightgreen' } });
            floatingInfo.style.display = "none";
            edges.forEach(function (edge) {
                if (edge.from === nodeId || edge.to === nodeId) {
                    var otherNodeId = edge.from === nodeId ? edge.to : edge.from;
                    var otherNode = nodes.get(otherNodeId);
                    if (otherNode.color && otherNode.color.background === 'lightgreen') {
                        edges.update({id: edge.id, color: {color: 'limegreen', highlight: 'limegreen'}, shadow: {enabled: true, color: 'lime', size: 10}});
                    }
                }
            });
            //display on bottom right number of completed nodes out of total nodes
            progress.innerHTML = `${completedNodes.length} / ${nodes.length}`;
        });

        document.getElementById('inProgressButton').addEventListener('click', function () {
            nodes.update({ id: nodeId, color: { background: 'yellow' } });
            floatingInfo.style.display = "none";

        });

        document.getElementById('removeButton').addEventListener('click', function () {
            nodes.update({ id: nodeId, color: { background: '#96c2fd' } });
            floatingInfo.style.display = "none";
            edges.forEach(function (edge) {
                if (edge.from === nodeId || edge.to === nodeId) {
                    edges.update({id: edge.id, color: {color: '#2e7ce9', highlight: '#2e7ce9'}, shadow: {enabled: false}});
                }
            });
        });
    } else {
        floatingInfo.style.display = "none";
    }
});

// Hide the floating box when dragging nodes
network.on("dragEnd", function (params) {
    if (floatingInfo.style.display === "block") {
        const pointerPos = params.pointer.DOM;
        floatingInfo.style.left = `${pointerPos.x + 10}px`;
        floatingInfo.style.top = `${pointerPos.y + 10}px`;
    }
});

// Set initial user node color
nodes.update({ id: -1, color: { background: 'black' } });


export default nodes;