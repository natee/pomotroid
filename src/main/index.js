'use strict'

import { logger } from './../renderer/utils/logger'
import { createLocalStore } from './../renderer/utils/LocalStore'
import {
  app,
  BrowserWindow,
  ipcMain,
  Tray,
  Menu,
  nativeImage,
  protocol,
  screen,
} from 'electron'

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
const winURL = isDevelopment
  ? 'http://localhost:9080'
  : `file://${__dirname}/index.html`

app.on('ready', () => {
  logger.info('app ready')

  createProtocol()
  createWindow()
  createMenu()

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
    } catch (error) {
      console.error(error)
    }
  })
}

function getNewWindowPosition() {
  const windowBounds = mainWindow.getBounds()
  const trayBounds = tray.getBounds()

  const primaryDisplay = screen.getPrimaryDisplay()

  // Center window horizontally below the tray icon
  const x = Math.round(trayBounds.x + (trayBounds.width / 2) - (windowBounds.width / 2))

  // Position window 4 pixels vertically below the tray icon
  // Adjust according if tray is at the bottom
  let y = Math.round(trayBounds.y + trayBounds.height + 4)
  if (y > primaryDisplay.workAreaSize.height) {
    y = trayBounds.y - trayBounds.height - windowBounds.height
  }

  return { x: x, y: y }
}

function toggleWindow() {
  if (mainWindow === null) {
    createWindow()
  } else {
    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show()
  }

  if (process.platform === 'darwin') {
    const position = getNewWindowPosition()
    mainWindow.setPosition(position.x, position.y, false)
  }
}

// 托盘操作
function createTray() {
  const trayIconFile = process.platform === 'darwin' ? 'icon--macos--tray.png' : 'icon.png'
  tray = new Tray(path.join(__static, trayIconFile))
  tray.setToolTip('🍅番茄计时器\n点击复原')
  tray.on('click', () => {
    toggleWindow()
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
    },
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

function createMenu() {
  const menuTemplate = [
    {
      label: '操作',
      submenu: [
        {
          label: '静音',
          click: () => {
            mainWindow.webContents.send('volume-off')
          }
        },
        {
          label: '取消静音',
          click: () => {
            mainWindow.webContents.send('volume-on')
          }
        },
        
      ],
    },
    {
      label: '窗口',
      submenu: [
        {
          label: '最小化',
          role: 'minimize'
        }
      ],
    },
    {
      label: '帮助',
      submenu: [
        {
          label: '关于番茄计时器',
          role: 'about'
        },
        {
          type: 'separator'
        },
        {
          label: '使用帮助',
          click: async () => {
            const { shell } = require('electron')
            await shell.openExternal('https://github.com/natee/pomotroid')
          }
        },
      ],
    }
  ]

  // osx 第一个菜单是应用程序名称
  if (process.platform === 'darwin') {
    console.log('app:',app)
    menuTemplate.unshift({
      label: app.getName(),
      submenu: [
        { label: '服务', role: 'services' },
        {
          label: '退出',
          accelerator: 'CmdOrCtrl+Q',
          click() {
            app.quit()
          },
        },
      ],
    })
  }

  const appMenu = Menu.buildFromTemplate(menuTemplate)
  Menu.setApplicationMenu(appMenu)
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
