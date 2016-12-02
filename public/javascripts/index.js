const ipc = require('electron').ipcRenderer;

//debugger;
const IS_DEBUG = (process.env.DEBUG) ? true : false;

const isDev = require('electron-is-dev');

if (isDev) {
    console.log('Running in development');
} else {
    console.log('Running in production');
}