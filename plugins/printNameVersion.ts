/**
 * This plugin function is called before instantiating the root Vue.js application.
 * It prints the app name and version that was put in config from the package.json file.
 */
export default function (context) {
  console.info(`${context.$config.appName} v${context.$config.appVersion}`)
}
