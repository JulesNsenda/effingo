let copyCount = 0;

chrome.runtime.onStartup.addListener(() => {
    copyCount = 0;
    chrome.storage.local.set({ copyCount: 0 });

    chrome.browserAction.setBadgeText({ text: '0' });
});

chrome.storage.local.get({ copyCount: 0 }, (data) => {
    copyCount = data.copyCount;
    chrome.browserAction.setBadgeText({ text: copyCount.toString() });
});

chrome.runtime.onMessage.addListener((message, _sender, _sendResponse) => {
    if (message.type === 'copy') {
        copyCount++;
        chrome.storage.local.set({ copyCount });
        chrome.browserAction.setBadgeText({ text: copyCount.toString() });
    }
});
