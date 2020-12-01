let executeScript = (tab) => {
	browser.tabs.executeScript(tab.id, {
		file: '/content-script.js'
	});
};

browser.browserAction.onClicked.addListener((tab) => {
	executeScript(tab);
});

browser.commands.onCommand.addListener((command) => {
	console.log({sender});
	if (command === 'activate') {
		browser.tabs.query({active: true, windowId: browser.windows.WINDOW_ID_CURRENT})
			.then(tabs => browser.tabs.get(tabs[0].id))
			.then(executeScript);
	}
});
