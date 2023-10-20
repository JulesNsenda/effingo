chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.get({ copyCount: 0 }, (data) => {
        let copyCount = data.copyCount;
        chrome.browserAction.setBadgeText({ text: copyCount.toString() });
    });

    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.type === 'copy') {
            chrome.storage.local.get({ copyCount: 0 }, (data) => {
                let copyCount = data.copyCount + 1;
                chrome.storage.local.set({ copyCount });
                chrome.browserAction.setBadgeText({ text: copyCount.toString() });
            });
        }
    });
});