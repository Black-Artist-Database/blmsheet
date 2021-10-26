module.exports = {
    outputDir: "dist",
    assetsDir: "static",
    devServer: {
        proxy: 'https://blackbandcamp-creatives-v2-g5yujcfoqq-ew.a.run.app/',
        disableHostCheck: true
      }
};
