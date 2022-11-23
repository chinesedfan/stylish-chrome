const fs = require('fs')
const files = [
    "src/global-config.js",
    "src/vendor/idb.js",
    "src/vendor/firebase.js",
    "src/vendor/axios.min.js",
    "src/firebase-utils.js",
    "src/ua-parser.js",
    "src/utils.js",
    "src/refilter.js",
    "src/helpers.js",
    "src/messaging.js",
    "src/storage-websql.js",
    "src/storage.js",
    "src/analyticsMain.js",
    "src/state.js",
    "src/pre_background.js",
    "src/background.js"
]
const output = 'bundle.js'
const content = files.map(name => fs.readFileSync(name, 'utf8'))
    .join('\n')
fs.writeFileSync(output, content)
