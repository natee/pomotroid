'use strict'

import { logger } from './../renderer/utils/logger'
import { createLocalStore } from './../renderer/utils/LocalStore'
import { app, BrowserWindow, ipcMain, Tray, Menu, nativeImage, protocol } from 'electron'

const path = require('path')
const localStore = createLocalStore()
const isDevelopment = process.env.NODE_ENV === 'development'
const notDevelopment = process.env.NODE_ENV !== 'development'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (notDevelopment) {
  global.__static = require('path')
    .join(__dirname, '/static')
    .replace(/\\/g, '\\\\')
}

let mainWindow, tray
const winURL =
  isDevelopment
    ? 'http://localhost:9080'
    : `file://${__dirname}/index.html`

app.on('ready', () => {
  logger.info('app ready')

  createProtocol()

  createWindow()
  const minToTray = localStore.get('minToTray')
  const alwaysOnTop = localStore.get('alwaysOnTop')

  if (minToTray) {
    createTray()
  }

  // this must be set after window has been created on ubuntu 18.04
  mainWindow.setAlwaysOnTop(alwaysOnTop)
})

app.on('window-all-closed', () => {
  logger.info('quitting app...')
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

ipcMain.on('toggle-alwaysOnTop', (event, arg) => {
  mainWindow.setAlwaysOnTop(arg)
})

ipcMain.on('toggle-minToTray', (event, arg) => {
  if (arg) {
    createTray()
  } else {
    tray.destroy()
  }
})

ipcMain.on('window-close', (event, arg) => {
  mainWindow.close()
})

ipcMain.on('window-minimize', (event, arg) => {
  if (arg) {
    mainWindow.hide()
  } else {
    mainWindow.minimize()
  }
})

ipcMain.on('tray-icon-update', (event, image) => {
  const nativeImg = nativeImage.createFromDataURL(image)
  tray.setImage(nativeImg)
})

// 用于加载 app 外的图片资源
// https://stackoverflow.com/questions/61623156/electron-throws-not-allowed-to-load-local-resource-when-using-showopendialog/61623585#61623585
function createProtocol() {
  const protocolName = 'pomotroid'
  protocol.registerFileProtocol(protocolName, (request, callback) => {
    const url = request.url.replace(`${protocolName}://`, '')
    try {
      return callback(decodeURIComponent(url))
    }
    catch (error) {
      console.error(error)
    }
  })
}

function createTray() {
  tray = new Tray(path.join(__static, 'icon.png'))
  tray.setToolTip('Pomotroid\nClick to Restore')
  tray.setContextMenu(Menu.buildFromTemplate([{ role: 'quit' }]))
  tray.on('click', () => {
    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show()
  })
  tray.on('right-click', () => {
    tray.popUpContextMenu()
  })
}

function createWindow() {
  const alwaysOnTop = localStore.get('alwaysOnTop')
  mainWindow = new BrowserWindow({
    alwaysOnTop,
    backgroundColor: '#2F384B',
    fullscreenable: false,
    frame: false,
    icon:
      process.platform === 'darwin'
        ? path.join(__static, 'icon--macos.png')
        : path.join(__static, 'icon.png'),
    resizable: isDevelopment,
    useContentSize: true,
    width: isDevelopment ? 540 : 360,
    height: isDevelopment ? 729 : 486,
    webPreferences: {
      enableRemoteModule: true,
      backgroundThrottling: false,
      nodeIntegration: true,
      // webSecurity: false
    }
  })

  mainWindow.loadURL(winURL)

  // send event to renderer on window restore
  mainWindow.on('restore', () => {
    mainWindow.webContents.send('win-restore')
  })

  // send event to renderer on window show
  mainWindow.on('show', () => {
    mainWindow.webContents.send('win-show')
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
