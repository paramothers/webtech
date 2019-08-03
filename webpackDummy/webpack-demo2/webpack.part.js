const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const BabiliPlugin = require("babili-webpack-plugin");

exports. minifyJS = () => ({
  plugins:[
    new BabiliPlugin(),
  ]
});
exports.generateSourceMaps = ({type}) => ({
  devtool:type,
});

exports.clean = (path) = ({
  plugins:[
    new CleanWebpackPlugin([path]),
  ]
});

exports.autoprefix = () => ({
  loader: "postcss-loader",
  options: {
    plugins: () => [require("autoprefixer")]
  }
});

exports.extractCSS = ({ include, exclude, use }) => {
  const plugin = new ExtractTextPlugin({
    filename: "[name].css"
  });

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude,
          use: plugin.extract({
            use,
            fallback: "style-loader"
          })
        }
      ]
    },
    plugins: [plugin]
  };
};

exports.loadImage = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(jpg|png|svg)$/,
        include,
        exclude,
        use: {
          loader: "url-loader",
          options,
        },
      }
    ]
  }
});

exports.loadCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        include,
        exclude,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [require("autoprefixer"), require("precss")]
            }
          }
        ]
      }
    ]
  }
});

exports.devServer = ({ host, port }) => ({
  devServer: {
    historyApiFallback: true,
    stats: "errors-only",
    host,
    port,
    overlay: {
      errors: true,
      warnings: true
    }
  }
});
exports.listJavaScript = ({ include, exclude, options }) => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        include,
        exclude,
        enforce: "pre",
        loader: "eslint-loader",
        options
      }
    ]
  }
});
