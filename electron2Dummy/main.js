const {app, BrowserWindow} =  require("electron");
const url = require('url');
const path = require('path');

let win;

function createWidow(){
    win = new BrowserWindow({
        width: 500,
        height: 400
    });

    win.loadURL(url.format({

        pathname: path.join(__dirname,'ipc-module-use/index.html'),
        protocol:'file',
        slashes: true
    }));
}

app.on('ready',createWidow);


