module.exports = {
    outputDir: "dist",
    assetsDir: "static",
    devServer: {
        proxy: 'https://blackartistdatabase.co/',
        disableHostCheck: true
      }
};
