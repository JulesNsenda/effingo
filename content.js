document.addEventListener('copy', () => {
    chrome.runtime.sendMessage({ type: 'copy' });
});
