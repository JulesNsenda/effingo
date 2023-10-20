let copyCount = 0;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'copy') {
        copyCount++;
        chrome.browserAction.setBadgeText({ text: copyCount.toString() });
    }
});