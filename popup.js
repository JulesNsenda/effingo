chrome.storage.local.get({ copyCount: 0 }, (data) => {
    const copyCount = data.copyCount;
    document.getElementById('copyCount').textContent = copyCount;
});  