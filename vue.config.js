module.exports = {
    outputDir: "dist",
    assetsDir: "static",
    devServer: {
      proxy: 'https://blmsheet-api-hnzs3737wa-ew.a.run.app/',
      disableHostCheck: true
    }
};