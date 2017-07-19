module.exports = {
  pluginns: [
    new webpack.DefinePlugin({
      'process.env.WEBPACK_PUBLIC_PATH': JSON.stringify(process.env.WEBPACK_PUBLIC_PATH)
    })
  ]
}

// topmostEntryPoint.js
__webpack_public_path__ = window.location.protocol + "//" + window.location.host + "/" + process.env.WEBPACK_PUBLIC_PATH;
