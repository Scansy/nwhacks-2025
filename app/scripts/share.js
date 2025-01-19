function generateLink(completedNodes) {
    const baseUrl = 'zanzigzan-app--8080.prod1b.defang.dev';

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