<template> </template>

<script>
import electron from 'electron'
import { shell, ipcRenderer } from 'electron'
const request = require('request')
const dialog = electron.remote.dialog
import * as pckg from './../../../package.json'

export default {
  computed: {
    autoUpdate() {
      return this.$store.getters.autoUpdate;
    },
  },
  mounted() {
    if(this.autoUpdate){
      this.checkForUpdate()
    }

    ipcRenderer.on('check-update', (event, arg) => {
      this.checkForUpdate()
    })
  },
  methods: {
    checkForUpdate() {
      request.get(
        {
          url:
            'https://raw.githubusercontent.com/natee/pomotroid/master/package.json',
          json: true,
        },
        (err, res, data) => {
          if (err) {
            // handle error
          } else if (res.statusCode === 200) {
            const newVersion = data.version
            const oldVersion = pckg.version
            if (oldVersion !== newVersion) {
              this.ShowMessageDialog(newVersion)
            }
          } else {
          }
        }
      )
    },

    ShowMessageDialog(version) {
      dialog
        .showMessageBox({
          type: 'info',
          title: `发现新版本 Version ${version}`,
          message: `发现新版本 Version ${version} ，是否去下载最新版本？`,
          checkboxLabel: '不再自动检查更新',
          buttons: ['下载', '取消'],
        })
        .then(result => {
          const { checkboxChecked, response } = result

          if(checkboxChecked === true){
            const payload = {
              key: 'autoUpdate',
              val: false
            }
            this.$store.dispatch('setSetting', payload)
            this.$store.dispatch('setViewState', payload)
          }

          if(response === 0){
            shell.openExternal(`https://github.com/natee/pomotroid/releases/tag/v${version}`)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
}
</script>
