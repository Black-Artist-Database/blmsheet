module.exports = {
    outputDir: "dist",
    assetsDir: "static",
    devServer: {
        proxy: 'https://blackbandcamp-phase-2-api-g5yujcfoqq-ew.a.run.app/',
        disableHostCheck: true
      }
};
