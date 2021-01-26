function checkGloboSemBesteirol(tabId, changeInfo, tab) {
  if (tab.url.indexOf('globo.com') > -1) {
    chrome.pageAction.show(tabId);
  }
}
chrome.tabs.onUpdated.addListener(checkGloboSemBesteirol);