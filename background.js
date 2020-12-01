let executeScript = browser.tabs.executeScript(tab.id, {
	file: '/content-script.js'
});

console.log('qqqqqqqqq');

browser.browserAction.onClicked.addListener((tab) => {
	console.log('ff');
	executeScript();
});

browser.commands.onCommand.addListener((command) => {
	console.log('hh');
	if (command === 'activate') {
		executeScript();
	}
});
