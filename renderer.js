const customTitlebar = require('custom-electron-titlebar');

const titlebar = new customTitlebar.Titlebar({
	backgroundColor: customTitlebar.Color.fromHex('#2b2b63'),
    titleHorizontalAlignment : "left",
    menu : false
});

titlebar.updateTitle('Electron Simple App')
