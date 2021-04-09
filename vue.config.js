module.exports = {
    outputDir: "dist",
    assetsDir: "static",
    devServer: {
        proxy: 'https://blackbandcamp.info/',
        disableHostCheck: true
      }
};
