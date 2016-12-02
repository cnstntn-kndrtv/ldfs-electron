const {
  app,
  BrowserWindow,
  Menu
} = require('electron');
const ipc = require('electron').ipcMain;
const path = require('path');
const url = require('url');
const fs = require('fs');

// dev mode
const isDev = require('electron-is-dev');
// debug
const debug = require('debug')('app:server');
// global variables
global.globalVars = {
  IS_DEV: isDev,
  IS_DEBUG: (process.env.DEBUG) ? true : false,
  TEMP_PATH: getTempPath()
}
// devtron
if (global.globalVars.IS_DEV) require('electron-debug')({
  showDevTools: true
});

require('./server');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

// single instance of app
const shouldQuit = app.makeSingleInstance((argv, workingDirectory) => {
  //
});

if (shouldQuit) {
  app.quit();
}

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    title: 'ldf-server-electron',
    width: 700,
    height: 600,
    resizable: true,
    center: true,
    //frame: false,
    //titleBarStyle: 'hidden',
    //transparent: true,
    show: false,
    //icon: __dirname + '/1.icns'
  });

  app.dock.setIcon(__dirname + '/public/images/owl.png');

  // Open the DevTools in DEBUG mode
  if (global.globalVars.IS_DEBUG) win.webContents.openDevTools();

  // show when ready
  win.once('ready-to-show', () => {
    win.show();
  });

  // load app window.
  win.loadURL('http://localhost:3000/');

  // win.loadURL(url.format({
  //   pathname: path.join(__dirname, appWindow),
  //   protocol: 'file:',
  //   slashes: true
  // }));

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
});

function getTempPath() {
  let tempPath = app.getPath('temp') + '/' + app.getName();
  debug('temp path', tempPath);
  fs.mkdir(tempPath, (e) => console.log(e));
  return tempPath;
}