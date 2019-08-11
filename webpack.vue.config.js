const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

// webpack.config.js
const webpackConfig = {
  entry: {
    index: path.join(__dirname, "vue", "index.vue")
  },
  output: {
    path: path.join(__dirname, "vue"),
    filename: "[name].js",
    libraryTarget: "umd"
  },
  target: "node",
  externals: {
    vue: "vue"
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".vue", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: "ts-loader",
        options: { appendTsSuffixTo: [/\.vue$/] }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  devtool: "source-map",
  mode: "production",
  plugins: [new VueLoaderPlugin()]
};

module.exports = webpackConfig;
