import electron from 'electron'
import { readdirSync, readFileSync, writeFile, unlink } from 'fs'
import { join, basename } from 'path'
import { initDirectory, userDir } from './LocalStore'
import { logger } from './../utils/logger'

const app = electron.app || electron.remote.app
const dialog = electron.remote.dialog
const desktopPath = app.getPath('desktop')
const localDir = join(__static, 'images')
const customDir = join(userDir(), 'images')
const isDevelopment = process.env.NODE_ENV === 'development'
const protocolName = 'pomotroid' + '://'

class UserImage {
  constructor() {
    initDirectory(customDir)
    this.images = []
    this.customImages = []
    this._load([localDir], false)
    this._load([customDir], true)
  }

  apply(url) {
    // 旧版（现在没用了），用background实现，但是无法读取用户文件夹图片
    document.documentElement.style.setProperty('--used-image', `url(${url})`)
  }

  getDefault() {
    return this.images[0]
  }

  // 获取 static 目录默认图片和用户上传目录自定义图片
  _load(directories, isCustom) {
    directories.forEach(d => {
      const files = readdirSync(d).filter(f => !/^(\.|node_modules)/.test(f))

      files.forEach(f => {
        const fullPath = join(d, f)
        if (!isCustom) {
          this.images.push(isDevelopment ? '/static/images/' + f : fullPath)
        } else {
          this.customImages.push(protocolName + fullPath)
        }
      })
    })
  }

  chooseImage() {
    dialog
      .showOpenDialog({
        title: '选择上传文件',
        defaultPath: desktopPath,
        buttonLabel: '确认',
        filters: [
          {
            name: '图片',
            extensions: ['jpg', 'jpeg', 'png', 'gif'],
          },
        ],
        properties: ['openFile'],
      })
      .then(file => {
        if (!file.canceled) {
          const filePath = file.filePaths[0].toString()
          this.saveImage(filePath)
        }
      })
      .catch(err => {
        logger.error(err)
      })
  }

  saveImage(path) {
    const newFileName = basename(path)
    const data = readFileSync(path)
    const fullPath = customDir + '/' + newFileName
    writeFile(fullPath, data, err => {
      if (err) {
        logger.error(err)
      }

      this.customImages.push(protocolName + fullPath)
    })
  }

  // 删除上传的图片
  removeImage(fullPath) {
    const path = fullPath.replace(protocolName, '')
    unlink(path, err => {
      if (err) {
        console.log(err)
        return false
      }
      console.log('图片已删除')

      const index = this.customImages.findIndex(url => url === fullPath)
      this.customImages.splice(index, 1)
    })
  }
}

export default new UserImage()
