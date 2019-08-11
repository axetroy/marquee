const path = require("path");

// webpack.config.js
const webpackConfig = {
  entry: {
    index: path.join(__dirname, "react", "index.tsx")
  },
  output: {
    path: path.join(__dirname, "react"),
    filename: "[name].js",
    libraryTarget: "umd"
  },
  target: "node",
  externals: {
    react: "react",
    "react-dom": "react-dom"
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.json"
        }
      }
    ]
  },
  devtool: "source-map",
  mode: "production",
  plugins: []
};

module.exports = webpackConfig;
