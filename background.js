let copyCount = 0;

chrome.runtime.onMessage.addListener((message, _sender, _sendResponse) => {
    if (message.type === 'copy') {
        copyCount++;
        chrome.browserAction.setBadgeText({ text: copyCount.toString() });
        chrome.storage.local.set({ copyCount });
    }
});

chrome.storage.local.get({ copyCount: 0 }, (data) => {
    copyCount = data.copyCount;
    chrome.browserAction.setBadgeText({ text: copyCount.toString() });
});