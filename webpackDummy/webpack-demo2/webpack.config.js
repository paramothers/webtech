const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const parts = require("./webpack.part");

const PATHS = {
  app: path.join(__dirname, "app"),
  build: path.join(__dirname, "build")
};

const productionConfig = merge([

  parts.clean(PATHS.build),
  parts.minifyJS(),
  parts.extractCSS({use: [
    "css-loader",
    parts.autoprefix()
  ]}),
  parts.loadImage({
    options:{
      limit:15000,
      name:"[name].[ext]",
    }
  }),
]);
const developmentConfig = merge([
  parts.devServer({
    host: process.env.HOST,
    port: process.env.PORT
  }),
  parts.loadCSS(),
  parts.loadImage(),
]);

const commonConfig = merge([
  {
    entry: {
      app: PATHS.app,
      style: PATHS.style,
      vendor: ["react"],
    },
    output: {
      path: PATHS.build,
      filename: "[name].js"
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Webpack Demo"
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name:"vendor",
      }),
    ]
  },
  parts.listJavaScript({
    include: PATHS.app
  }),
  parts.loadCSS(),
]);

module.exports = env => {
  console.log("env", env);
  if (env === "production") {
    return  merge(commonConfig,productionConfig);
  }
  return  merge(commonConfig,developmentConfig);
};
