Uncaught Exception:
Error: ENOENT, node_modules/ldf-server/assets/LICENSE not found in /Users/constantin/Desktop/ldfs-electron/dist/mac/ldfs-electron.app/Contents/Resources/app.asar
    at notFoundError (ELECTRON_ASAR.js:115:19)
    at Object.fs.readFileSync (ELECTRON_ASAR.js:514:9)
    at /Users/constantin/Desktop/ldfs-electron/dist/mac/ldfs-electron.app/Contents/Resources/app.asar/node_modules/ldf-server/lib/controllers/AssetsController.js:27:20
    at Array.reduce (native)
    at new AssetsController (/Users/constantin/Desktop/ldfs-electron/dist/mac/ldfs-electron.app/Contents/Resources/app.asar/node_modules/ldf-server/lib/controllers/AssetsController.js:23:47)
    at instantiate (/Users/constantin/Desktop/ldfs-electron/dist/mac/ldfs-electron.app/Contents/Resources/app.asar/server.js:145:10)
    at /Users/constantin/Desktop/ldfs-electron/dist/mac/ldfs-electron.app/Contents/Resources/app.asar/server.js:152:14
    at map (/Users/constantin/Desktop/ldfs-electron/dist/mac/ldfs-electron.app/Contents/Resources/app.asar/node_modules/lodash/dist/lodash.js:3509:27)
    at instantiateAll (/Users/constantin/Desktop/ldfs-electron/dist/mac/ldfs-electron.app/Contents/Resources/app.asar/server.js:150:57)
    at Object.<anonymous> (/Users/constantin/Desktop/ldfs-electron/dist/mac/ldfs-electron.app/Contents/Resources/app.asar/server.js:90:22)