function generateLink(completedNodes, inProgressNodes) {
    const baseUrl = 'zanzigzan-app--8080.prod1b.defang.dev/';

    if (completedNodes.length === 0) {
        return baseUrl;
    }

    const params = new URLSearchParams();
    if (completedNodes.length > 0) {
        params.append('completedNodes', completedNodes.join(','));
    }
    if (inProgressNodes.length > 0) {
        params.append('inProgressNodes', inProgressNodes.join(','));
    }
    const url = `${baseUrl}?${params.toString()}`;
    return url;
}

function saveToClipboardShare(completedNodes, inProgressNodes) {
    navigator.clipboard.writeText(generateLink(completedNodes, inProgressNodes));
}

function loadFromClipboardShare() {
    const params = new URLSearchParams(window.location.search);
    const completedNodesParam = params.get('completedNodes');
    const inProgressNodesParam = params.get('inProgressNodes');
    const completedNodes = completedNodesParam ? completedNodesParam.split(',').map(Number) : [];
    const inProgressNodes = inProgressNodesParam ? inProgressNodesParam.split(',').map(Number) : [];
    console.log({ "completedNodes": completedNodes, "inProgressNodes": inProgressNodes });
    return { "completedNodes": completedNodes, "inProgressNodes": inProgressNodes };
}

export { saveToClipboardShare, loadFromClipboardShare };