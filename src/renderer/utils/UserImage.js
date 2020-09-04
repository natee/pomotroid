import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'
import { initDirectory, userDir } from './LocalStore'

class UserImage {
  constructor() {
    const localDir = join(__static, 'images')
    const customDir = join(userDir(), 'images')
    initDirectory(customDir)
    this.images = []
    this._load([localDir, customDir])
  }

  apply(url) {
    document.documentElement.style.setProperty("--used-image", `url(${url})`)
  }

  getDefault() {
    return this.images[0]
  }

  _load(directories){
    directories.forEach(d => {
      const files = readdirSync(d)
      files.forEach(f => {
        const fullPath = join(d, f);
        this.images.push("/static/images/" + f)
      })
    })
    console.log(this.images);
  }
}

export default new UserImage()