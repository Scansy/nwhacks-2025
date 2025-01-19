import frontEndNodes from '../data/FrontEndNodes.js';
import FrontEndEdges from '../data/FrontEndEdges.js';
import backEndNodes from '../data/BackEndNodes.js';
import { saveToClipboardShare, loadFromClipboardShare } from './share.js';

// Function to save current state to localStorage
function saveCurrentState() {
    const nodes = network.body.data.nodes.get();
    const edges = network.body.data.edges.get();
    const positions = network.getPositions();
    
    // Format nodes and separate by group
    const frontendNodes = [];
    const backendNodes = [];

    nodes.forEach(node => {
        const pos = positions[node.id];
        const formattedNode = {
            "ID": node.id,
            "NodeName": node.label,
            "Description": node.Description,
            "x": pos ? Math.round(pos.x) : 0,
            "y": pos ? Math.round(pos.y) : 0,
            "group": node.group
        };

        // Sort into appropriate arrays based on group
        if (node.group === 'frontend') {
            frontendNodes.push(formattedNode);
        } else if (node.group === 'backend') {
            backendNodes.push(formattedNode);
        }
    });

    // Sort each array by ID
    frontendNodes.sort((a, b) => a.ID - b.ID);
    backendNodes.sort((a, b) => a.ID - b.ID);

    // Create strings for each file
    const frontendString = 'const data = ' + JSON.stringify(frontendNodes, null, 2) + ';\n\nexport default data;';
    const backendString = 'const data = ' + JSON.stringify(backendNodes, null, 2) + ';\n\nexport default data;';

    // Format edges
    const formattedEdges = edges.map(edge => ({
        "from": edge.from,
        "to": edge.to,
        "id": edge.id
    }));

    // Save to localStorage
    localStorage.setItem('frontendNodes', frontendString);
    localStorage.setItem('backendNodes', backendString);
    localStorage.setItem('edges', JSON.stringify(formattedEdges, null, 2));
    
    // Log the saved data
    console.log('Saved Frontend Nodes:', frontendString);
    console.log('Saved Backend Nodes:', backendString);
    console.log('Saved Edges:', JSON.stringify(formattedEdges, null, 2));
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

// create an array with nodes.id
var nodeIds = [];

function generateNodes(data) {
    const generatedNodes = [];
    if (Array.isArray(data)) {
        data.forEach((item) => {
            generatedNodes.push({
                id: item.ID,
                label: item.NodeName,
                Description: item.Description,
                fixed: false,
                group: item.group,
                x: item.x,
                y: item.y
            });
            nodeIds.push(item.ID);
        });
    }
    return generatedNodes;
}

// Then combine the nodes from different sources:
const allNodes = [
    ...generateNodes(frontEndNodes),
    ...generateNodes(backEndNodes),
];

var nodes = new vis.DataSet(allNodes);


function generateEdges() {
    const generatedEdges = [];
    // Only process frontend edges if they exist
    if (FrontEndEdges && Array.isArray(FrontEndEdges)) {
        FrontEndEdges.forEach((edge) => {
            generatedEdges.push({
                from: edge.from,
                to: edge.to,
                id: edge.id
            });
        });
    }
    return generatedEdges;
}





nodes.update({
    id: "218",
    shape: 'image',
    image: 'images/frontEnd.png',
    size: 30, // controls image size in pixels
    label: false
  });

  nodes.update({
    id: "219",
    shape: 'image',
    image: 'images/BackEnd.png',
    size: 30, // controls image size in pixels
    label: false
  });

// Create a network
var nodes = new vis.DataSet(allNodes);
var edges = new vis.DataSet(generateEdges());
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
        addNode: function (frontEndNodes, callback) {
            frontEndNodes.label = prompt("Enter node label:", "New Node");
            if (frontEndNodes.label) {
                callback(frontEndNodes);
            } else {
                callback(null);
            }
        },
        editNode: function (frontEndNodes, callback) {
            frontEndNodes.label = prompt("Edit node label:", frontEndNodes.label);
            if (frontEndNodes.label) {
                callback(frontEndNodes);
            } else {
                callback(null);
            }
        },
        addEdge: function (FrontEndEdges, callback) {
            if (FrontEndEdges.from !== FrontEndEdges.to) {
                callback(FrontEndEdges);
            } else {
                alert("Self-loops are not allowed.");
                callback(null);
            }
        },
        editEdge: function (FrontEndEdges, callback) {
            callback(FrontEndEdges);
        },
        deleteNode: true,
        deleteEdge: true,
    },
    edges: {
        smooth: {
            type: 'curvedCW',  // clockwise curved edges
            roundness: 0.2     // adjust from 0 to 1 for curve intensity
        }
    },
    nodes: {
        shape: "dot",
        size: 16,
        borderWidth: 2,
        shadow: true,
        font: { color: "black" }
    },
    groups: {
        Frontend: { color: { background: '#2596be', border: '#2180A3' } },
        Backend: { color: { background: '#be3bff', border: '#7c00ba' } },
        DevOps: { color: { background: '#e60707', border: '#4D0000' } }
    },
    physics: false,
    
};

var completedNodes = [];
var inProgressNodes = [];
// Initialize network
var network = new vis.Network(container, data, options);
// colorCodeNodes();

// Event listener for node clicks
network.on("click", function (params) {
    if (params.nodes.length > 0) {
        const nodeId = params.nodes[0];
        const frontEndNodes = nodes.get(nodeId);
        const pointerPos = params.pointer.DOM;

        floatingInfo.innerHTML = `
            <strong>${frontEndNodes.label}</strong><br>
            <div class="popup-desc">${frontEndNodes.Description}<br> </div>
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
            nodes.update({ id: nodeId, color: { background: 'lightgreen', highlight: 'lightgreen' }, shadow: {enabled: true, color: "rgb(39, 245, 63)", size: 100}, borderWidth: 2});
            floatingInfo.style.display = "none";
            edges.forEach(function (edge) {
                if (edge.from === nodeId || edge.to === nodeId) {
                    var otherNodeId = edge.from === nodeId ? edge.to : edge.from;
                    var otherNode = nodes.get(otherNodeId);
                    if (otherNode.color && otherNode.color.background === 'lightgreen') {
                        edges.update({id: edge.id,  color: {color: 'limegreen', highlight: 'limegreen'}, shadow: {enabled: true, color: 'lime', size: 20}, width: 2});
                    }
                }
            });

            // display on bottom right number of completed nodes out of total nodes
            let progress = document.querySelector("#total");
            progress.innerHTML = `Total: ${completedNodes.length-1} / ${nodes.length-1}`;
        });

        document.getElementById('inProgressButton').addEventListener('click', function () {
            inProgressNodes.push(nodeId);
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
nodes.update({ id: -1, color: { background: 'lightgreen' }, shape: 'circularImage', image: 'images/user-icon.svg', size: 50});
completedNodes.push(-1);

// color code nodes
// function colorCodeNodes() {
//     const allNodes = nodes.get();
    
//     allNodes.forEach((node) => {
//         console.log(`Processing node ${node.id}:`, {
//             group: node.group,
//             currentColor: node.color
//         });
        
//         let newColor = null;
//         if (node.group === "Frontend") {
//             newColor = { background: '#2596be', border: '#2180A3' };
//         } else if (node.group === 'Backend') {
//             newColor = { background: '#9932CC', border: '#1e3333' };
//         } else if (node.group === 'DevOps') {
//             newColor = { background: '#800000', border: '#4D0000' };
//         }
//     });
// }

window.onload = function () {
    let savedData = loadFromClipboardShare();
    if (savedData != null) {
        // TODO: add inprogress nodes saved data
        completedNodes = savedData;
        nodes.forEach(function (node) {
            if (completedNodes.includes(node.id)) {
                nodes.update({ id: node.id, color: { background: 'lightgreen' } });
                edges.forEach(function (edge) {
                    if (edge.from === nodeId || edge.to === nodeId) {
                        var otherNodeId = edge.from === nodeId ? edge.to : edge.from;
                        var otherNode = nodes.get(otherNodeId);
                        if (otherNode.color && otherNode.color.background === 'lightgreen') {
                            edges.update({id: edge.id,  color: {color: 'limegreen', highlight: 'limegreen'}, shadow: {enabled: true, color: 'lime', size: 20}, width: 2});
                        }
                    }
                });
            }
        });
    }
};
document.getElementById('shareButton').addEventListener('click', function () {
    saveToClipboardShare(completedNodes);
});

export default {nodes, nodeIds, completedNodes, inProgressNodes};