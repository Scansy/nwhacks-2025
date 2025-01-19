import nodeData from './nodes.js';
const nodes = nodeData.nodes;
const nodeIds= nodeData.nodeIds;
const completedNodes = nodeData.completedNodes;

const frontendId = [];
for (let i = 1; i < 101; i++) {
    if (nodeIds.includes(i))
        frontendId.push(i)
};

const backendId= [];
for (let i = 101; i < 201; i++) {
    if (nodeIds.includes(i))
        backendId.push(i)
};

const devopsId = [];
for (let i = 201; i < 301; i++) {
    if (nodeIds.includes(i))
        devopsId.push(i)
}

document.getElementById("roadmapBox").addEventListener("change", () => {
    clearHighlight();
    let rmNodeCount = document.querySelector("#roadmap")
    let val = document.getElementById("roadmapBox").value;

    if (val === "Frontend") {
        frontendId.forEach(id => {
            nodes.update({ id: id, color: { background: 'lightblue', border: 'blue' }, shadow: {enabled: true, color: "rgba(39, 143, 245, 1)", size: 100}, borderWidth: 2});
            if (completedNodes.includes(id)) {
                nodes.update({ id: id, color: { background: 'lightgreen' }});
            }
        });
    } else if (val === "Backend") {
        backendId.forEach(id => {
            nodes.update({ id: id, color: { background: 'lightblue', border: 'blue' }, shadow: {enabled: true, color: "rgba(39, 143, 245, 1)", size: 100}, borderWidth: 2});
            if (completedNodes.includes(id)) {
                nodes.update({ id: id, color: { background: 'lightgreen' }});
            }
        });
    } else if (val === "DevOps") {
        devopsId.forEach(id => {
            nodes.update({ id: id, color: { background: 'lightblue', border: 'blue' }, shadow: {enabled: true, color: "rgba(39, 143, 245, 1)", size: 100}, borderWidth: 2});
            if (completedNodes.includes(id)) {
                nodes.update({ id: id, color: { background: 'lightgreen' }});
            }
        });
    }
});

// document.getElementById('completeButton').addEventListener('click', function () {
//     let val = document.getElementById("roadmapBox").value;
//     updateProgress(val);
// });

function clearHighlight() {
    nodeIds.forEach(id => {
        if (nodeIds.includes(id) && !completedNodes.includes(id)) {
            nodes.update({ id: id, color: { background: '#2596be' }, shadow: {enabled: false}, borderWidth: 1});
        }
    });
}

// function countDoneNodes(val) {
//     let count = 0;
//     let ids;
//     switch (val) {
//         case "Frontend":
//             ids = frontendId;
//             break;
//         case "Backend":
//             ids = backendId;
//             break;
//         case "DevOps":
//             ids = devopsId;
//             break;
//     }
//     console.log(ids)
//     nodes.forEach(node => {
//         if (completedNodes.includes(node) && ids.includes(node.id)) {
//             count++;
//         }
//     });
//     return count;
// }

// // also called every time a node is checked!
// function updateProgress(val) {
//     let progress = document.querySelector("#roadmap p");
//     console.log(countDoneNodes(val));
//     progress.innerHTML = `${val} progress: ${countDoneNodes(val)} / ${Object.keys(nodes).length}`;
// }