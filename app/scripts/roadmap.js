import nodeData from './nodes.js';
const nodes = nodeData.nodes;
const nodeIds= nodeData.nodeIds;
const completedNodes = nodeData.completedNodes;
const inProgressNodes = nodeData.inProgressNodes;

const frontendId = [];
const backendId= [];
const devopsId = [];
const cybersecId = [];
nodes.forEach(node => {
    if (nodeIds.includes(node.id)) {
        if (node.group === "frontend") {
            frontendId.push(node.id);
        } else if (node.group === "backend") {
            backendId.push(node.id);
        } else if (node.group === "devops") {
            devopsId.push(node.id);
        } else if (node.group === "cybersec") {
            cybersecId.push(node.id);
        }
    }
});

// highlight roadmap nodes based on discipline
document.getElementById("roadmapBox").addEventListener("change", () => {
    clearHighlight();
    let rmNodeCount = document.querySelector("#roadmap")
    let val = document.getElementById("roadmapBox").value;

    if (val === "Frontend") {
        frontendId.forEach(id => {
            nodes.update({ id: id, color: { background: 'lightblue', border: 'blue' }, shadow: {enabled: true, color: "rgba(39, 143, 245, 1)", size: 100}, borderWidth: 2});
            if (completedNodes.includes(id)) {
                nodes.update({ id: id, color: { background: 'lightgreen' }, shadow: {enabled: true, color: "rgb(39, 245, 63)", size: 100}, borderWidth: 2});
            }
            if (inProgressNodes.includes(id)) {
                nodes.update({ id: id, color: { background: 'orange' }, shadow: {enabled: true, color: "rgb(245, 183, 39)", size: 100}, borderWidth: 2});
            }
        });
    } else if (val === "Backend") {
        backendId.forEach(id => {
            nodes.update({ id: id, color: { background: '#c393db', border: '#871abd' }, shadow: {enabled: true, color: "rgb(193, 21, 220)", size: 100}, borderWidth: 2});
            if (completedNodes.includes(id)) {
                nodes.update({ id: id, color: { background: 'lightgreen' }, shadow: {enabled: true, color: "rgb(39, 245, 63)", size: 100}, borderWidth: 2});
            }
            if (inProgressNodes.includes(id)) {
                nodes.update({ id: id, color: { background: 'orange' }, shadow: {enabled: true, color: "rgb(245, 183, 39)", size: 100}, borderWidth: 2});
            }
        });
    } else if (val === "DevOps") {
        devopsId.forEach(id => {
            nodes.update({ id: id, color: { background: '#d65858', border: '#800000' }, shadow: {enabled: true, color: "rgb(228, 15, 15)", size: 100}, borderWidth: 2});
            if (completedNodes.includes(id)) {
                nodes.update({ id: id, color: { background: 'lightgreen' }, shadow: {enabled: true, color: "rgb(39, 245, 63)", size: 100}, borderWidth: 2});
            }
            if (inProgressNodes.includes(id)) {
                nodes.update({ id: id, color: { background: 'orange' }, shadow: {enabled: true, color: "rgb(245, 183, 39)", size: 100}, borderWidth: 2});
            }
        });
    } else if (val === "Cybersecurity") {
        cybersecId.forEach(id => {
            nodes.update({ id: id, color: { background: '#cca87a', border: '#c97200' }, shadow: {enabled: true, color: "rgb(230, 173, 101)", size: 100}, borderWidth: 2});
            if (completedNodes.includes(id)) {
                nodes.update({ id: id, color: { background: 'lightgreen' }, shadow: {enabled: true, color: "rgb(39, 245, 63)", size: 100}, borderWidth: 2});
            }
            if (inProgressNodes.includes(id)) {
                nodes.update({ id: id, color: { background: 'orange' }, shadow: {enabled: true, color: "rgb(245, 183, 39)", size: 100}, borderWidth: 2});
            }
        });
    } else if (val === "All") { // highlight all nodes
        highlightAll();
    }
});

function clearHighlight() {
    nodeIds.forEach(id => {
        if (nodeIds.includes(id) && !completedNodes.includes(id)) {
            if (frontendId.includes(id)) {
                nodes.update({ id: id, color: { background: '#2596be' }, shadow: {enabled: false}, borderWidth: 1});
            } else if (backendId.includes(id)) {
                nodes.update({ id: id, color: { background: '#be3bff' }, shadow: {enabled: false}, borderWidth: 1});
            } else if (devopsId.includes(id)) {
                nodes.update({ id: id, color: { background: '#e60707' }, shadow: {enabled: false}, borderWidth: 1});
            } else if (cybersecId.includes(id)) {
                nodes.update({ id: id, color: { background: '#e60707' }, shadow: {enabled: false}, borderWidth: 1});
            }
        }
        if (nodeIds.includes(id) && !completedNodes.includes(id) && !inProgressNodes.includes(id)) {
            nodes.update({ id: id, color: { background: '#2596be' }, shadow: {enabled: false}, borderWidth: 1});
        }
    });
}

function highlightAll() {
    frontendId.forEach(id => {
        nodes.update({ id: id, color: { background: '#a378c2', border: '#493657' }, shadow: {enabled: false}, borderWidth: 1});
    });
    backendId.forEach(id => {
        nodes.update({ id: id, color: { background: '#f5f0c5', border: '#bfa297' }, shadow: {enabled: false}, borderWidth: 1});
    });
    devopsId.forEach(id => {
        nodes.update({ id: id, color: { background: '#81adc8', border: '#678aa1' }, shadow: {enabled: false}, borderWidth: 1});
    });
    cybersecId.forEach(id => {
        nodes.update({ id: id, color: { background: '#c97200', border: '#7d4600' }, shadow: {enabled: false}, borderWidth: 1});
    });
}