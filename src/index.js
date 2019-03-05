/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

const extendWithFlashcard = function (api, conf) {
  // make sure there is a framework section
  if (!conf.framework) {
    conf.framework = {}
  }
  
  // make sure there is a directives array
  if (!conf.framework.directives) {
    conf.framework.directives = []
  }

  // for brevity
  let directives = conf.framework.directives

  // make sure directive CloseMenu is added
  // if (!directives.includes('CloseMenu')) {
  //   console.log(` App Extension (qmediaplayer) Info: 'Adding CloseMenu directive - consider adding this to your quasar.conf.js'`)
  //   directives.push('CloseMenu')
  // }
  // make sure directive Ripple is added
  // if (!directives.includes('Ripple')) {
  //   console.log(` App Extension (qmediaplayer) Info: 'Adding Ripple directive - consider adding this to your quasar.conf.js'`)
  //   directives.push('Ripple')
  // }

  // make sure there is a boot array
  if (!conf.boot) {
    conf.boot = []
  }

  // for brevity
  let boot = conf.boot

  // make sure qmediaplayer boot file is registered
  if (!boot.includes('qflashcard')) {
    boot.push('qflashcard')
    console.log(` App Extension (qflashcard) Info: 'Adding qflashcard boot reference to your quasar.conf.js'`)
  }
}

module.exports = function (api, ctx) {
  api.extendQuasarConf((conf) => {
    extendWithFlashcard(api, conf)
  })
}
