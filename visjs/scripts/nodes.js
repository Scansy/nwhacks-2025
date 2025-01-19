import nodeData from './nodeData.js';

function generateNodes(data) {
    const generatedNodes = [];

    data.forEach((item) => {
        generatedNodes.push({
            id: item.ID,
            label: item.NodeName,
            title: item.Description,
            fixed: true,
            color: { border: '#111', background: '#f0f0f0' },
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
    nodes: {
        shape: "dot",
        size: 16,
        borderWidth: 3,
        shadow: true
    },
    physics: false
};

// initialize your network!
var network = new vis.Network(container, data, options);


      // Event listener for node clicks
      network.on("click", function (params) {
        if (params.nodes.length > 0) {
          const nodeId = params.nodes[0];
          const nodeData = nodes.get(nodeId);
          
          // Get the pointer event position directly from the params
          const pointerPos = params.pointer.DOM;
          
          // Update content and position of the floating info box
          floatingInfo.innerHTML = `
            <strong>${nodeData.label}</strong><br>
            ${nodeData.title}<br>
            <div class="button-container">
                <button id="completeButton" class="complete-button">Complete</button>
                <button id="inProgressButton" class="inProgress-button">In-Progress</button>
                <button id="removeButton" class="remove-button">Remove</button>
            </div>
          `;
          
          // Position the box relative to the click position
          floatingInfo.style.left = `${pointerPos.x + 10}px`;
          floatingInfo.style.top = `${pointerPos.y + 10}px`;
          floatingInfo.style.display = "block";

        // Add event listeners to the buttons
        document.getElementById('completeButton').addEventListener('click', function () {
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
          // Hide the floating box when clicking on canvas but not on nodes
          floatingInfo.style.display = "none";
        }
      });

      // Hide the floating box when dragging nodes
      network.on("dragEnd", function (params) {
        if (floatingInfo.style.display === "block") {
          const nodeId = params.nodes[0];
          const pointerPos = params.pointer.DOM;
          
          floatingInfo.style.left = `${pointerPos.x + 10}px`;
          floatingInfo.style.top = `${pointerPos.y + 10}px`;
        }
      });

// // add event listener for click events
// network.on("click", function (params) {
//     if (params.nodes.length > 0) {
//         var nodeId = params.nodes[0];
//         nodes.update({ id: nodeId, color: { background: 'red' } });
//     }
// });

// Modify the user's node
nodes.update({ id: -1, color: { background: 'black' } });
