const path = require("path");

module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/styles.scss")],
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule("downloads")
      // bundle common document files
      .test(/\.(pdf|docx?|xlsx?|csv|pptx?)(\?.*)?$/)
      .use("file-loader")
      // use the file-loader
      .loader("file-loader")
      // bundle into the "downloads" directory
      .options({ name: "downloads/[name].[ext]" });
  },
};
