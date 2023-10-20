chrome.runtime.getBackgroundPage((backgroundPage) => {
    const copyCount = backgroundPage.copyCount || 0;
    document.getElementById('copyCount').textContent = copyCount;
});