window.browser = (function () {
  return window.msBrowser ||
    window.browser ||
    window.chrome;
})();

browser.runtime.onInstalled.addListener(function(details) {
	browser.tabs.query({}, function(tabs) {
        tabs.forEach(function(tab){
			browser.tabs.executeScript(tab.id, {
				code: "console.log('hello world');"
			});
        });
    });
});