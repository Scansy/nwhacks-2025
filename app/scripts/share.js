function generateLink(completedNodes) {
    const baseUrl = 'http://127.0.0.1:5501/visjs/index.html';

    if (completedNodes.length === 0) {
        return baseUrl;
    }

    const params = new URLSearchParams();
    params.append('completedNodes', completedNodes.join(','));
    const url = `${baseUrl}?${params.toString()}`;
    return url;
}

function saveToClipboardShare(completedNodes) {
    navigator.clipboard.writeText(generateLink(completedNodes));
}

function loadFromClipboardShare() {
    const params = new URLSearchParams(window.location.search);
    const completedNodesParam = params.get('completedNodes');
    if (completedNodesParam) {
        return completedNodesParam.split(',').map(Number);
    }
    return null;
}

export { saveToClipboardShare, loadFromClipboardShare };