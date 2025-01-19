import nodes from './nodes.js';
// const nodes_ = Nodes.nodes;

const frontendId = [];
for (let i = 1; i < 16; i++) {
  frontendId.push(i)
};

const backendId= [];
for (let i = 101; i < 103; i++) {
    backendId.push(i)
};

document.getElementById("roadmaps").addEventListener("change", () => {
    console.log(nodes);
    cleanHighlight();
    let val = document.getElementById("roadmaps").value;
    let progress = document.querySelector(".progress p");

    if (val === "Frontend") {
        frontendId.forEach(id => {
            nodes.update({ id: id, color: { background: 'lightblue', border: 'blue' }, shadow: {enabled: true, color: "rgba(39, 143, 245, 0.8)"}, size: 50 , borderWidth: 2});
        });
    } else if (val === "Backend") {
        backendId.forEach(id => {
            nodes.update({ id: id, color: { background: 'lightblue', border: 'blue' }, shadow: {enabled: true, color: "rgba(39, 143, 245, 0.8)"}, size: 1000 , borderWidth: 2});
        });
    }
    updateProgress(val);
});

function cleanHighlight() {
    frontendId.forEach(id => {
        nodes.update({ id: id, color: { background: 'white' }, shadow: {enabled: false}, size: 500, borderWidth: 1});
    });
    backendId.forEach(id => {
        nodes.update({ id: id, color: { background: 'white' }, shadow: {enabled: false}, size: 500, borderWidth: 1});
    });
}

function countDoneNodes(val) {
    let count = 0;
    let ids = (val === "Frontend") ? frontendId : backendId;
    nodes.forEach(node => {
        if (node.color.background === 'lightgreen' && ids.includes(node.id)) {
            count++;
        }
    });
    return count;
}

// also called every time a node is checked!
function updateProgress(val) {
    let progress = document.querySelector("#progress p");
    console.log(typeof(nodes))
    progress.innerHTML = `${val} progress: ${countDoneNodes(val)}/${Object.keys(nodes).length}`;
}