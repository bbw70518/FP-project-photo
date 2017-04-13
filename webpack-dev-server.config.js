const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build'); // bundle.js 存放的資料夾 提高react 的搜尋速度
const nodeModulesPath = path.resolve(__dirname, 'node_modules'); // 把 node_modules 資料夾位置存起來
// const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {
  // Entry points to the project
  entry: [
    'webpack/hot/dev-server', // 啟動 react-hot-loader
    'webpack/hot/only-dev-server', // 啟動 react-hot-loader
    path.join(__dirname, '/src/app/index.jsx'), // 程式進入點
    // 'babel-polyfill', __dirname + '/src/app/index.jsx',
  ],
  // Server Configuration options
  devServer: {
    historyApiFallback: true, // true 的話，可以使用 router 超連結
    contentBase: 'src/www', // Relative directory for base of server
    devtool: 'eval',
    hot: true, // Live-reload
    inline: true,
    port: 3000, // Port Number
    host: 'localhost', // Change to '0.0.0.0' for external facing server
  },
  devtool: 'eval',
  output: {
    path: buildPath, // Path of output file
    filename: 'app.js', // bundle.js 的檔名，可以自由修改，此處修改為 app.js
  },
  plugins: [
    // Enables Hot Modules Replacement
    new webpack.HotModuleReplacementPlugin(),
    // Allows error warnings but does not stop compiling.
    new webpack.NoErrorsPlugin(),
    // Moves files
    // new TransferWebpackPlugin([
    //   {from: 'www'},
    // ], path.resolve(__dirname, 'src')),
  ],
  module: {
    loaders: [
      {
        // React-hot loader and
        test: /\.jsx?$/, // All .js / .jsx files
        loaders: ['react-hot', 'babel-loader'], // react-hot is like browser sync and babel loads jsx and es6-7
        exclude: [nodeModulesPath],
      }, {
        test: /\.(woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file&name=./font/[hash].[ext]'
        //loader: 'file'
      }, {
        test: /\.(jpe?g|png|gif|svg|bmp)$/i,
        loader: 'url?limit=8192&name=./img/[hash].[ext]'
        //loader: 'url'
      }, {
        test: /\.(styl|css)$/,
        loader: 'style-loader!css-loader'
      },
    ],
  },
};

module.exports = config;
