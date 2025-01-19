import nodeData from './nodeData.js';

// Function to save current state to localStorage
function saveCurrentState() {
    // Save node positions
    const positions = {};
    nodes.forEach(node => {
        const pos = network.getPositions([node.id])[node.id];
        positions[node.id] = {
            id: node.id,
            label: node.label,
            x: Math.round(pos.x),
            y: Math.round(pos.y),
            color: node.color
        };
    });
    
    // Save edge connections
    const connections = edges.get().map(edge => ({
        from: edge.from,
        to: edge.to,
        id: edge.id
    }));

    // Save both to localStorage
    localStorage.setItem('nodePositions', JSON.stringify(positions, null, 2));
    localStorage.setItem('edgeConnections', JSON.stringify(connections, null, 2));
    
    // Log the saved data
    console.log('Saved node positions:', positions);
    console.log('Saved edge connections:', connections);
    
    // Show a save confirmation
    alert('Graph state saved successfully!');
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
            desc: item.Description,
            fixed: false,
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
    interaction: {
        selectConnectedEdges: false
     },
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
            ${nodeData.desc}<br>
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
            nodes.update({ id: nodeId, color: { background: 'lightgreen', highlight: 'lightgreen' } });
            floatingInfo.style.display = "none";
            edges.forEach(function (edge) {
                if (edge.from === nodeId || edge.to === nodeId) {
                    var otherNodeId = edge.from === nodeId ? edge.to : edge.from;
                    var otherNode = nodes.get(otherNodeId);
                    if (otherNode.color && otherNode.color.background === 'lightgreen') {
                        edges.update({id: edge.id,  color: {color: 'limegreen', highlight: 'limegreen'}, shadow: {enabled: true, color: 'lime', size: 15}});
                    }
                }
            });
            //display on bottom right number of completed nodes out of total nodes
            progress.innerHTML = `${completedNodes.length} / ${nodes.length}`;
        });

        document.getElementById('inProgressButton').addEventListener('click', function () {
            nodes.update({ id: nodeId, color: { background: 'orange', highlight: 'Orange' } });
            floatingInfo.style.display = "none";

        });

        document.getElementById('removeButton').addEventListener('click', function () {
            nodes.update({ id: nodeId, color: { background: '#2696be', highlight: '#2696be' } });
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