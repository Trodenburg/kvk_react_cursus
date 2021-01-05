const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
 
module.exports = {
entry: './src/index.js',
mode: 'development',

devServer: {

    open: true, //automatically launches the server in the browser
  },
module: {
    rules: [
      { test: /\.jsx?$/, use:'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
    transformIgnorePatterns: ["/node_modules/(?!vue-awesome)"],
  },
output: {
    filename: '[name].bundle.js', //sets the output bundle name
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/', //sets the base path for all assets
  },
  plugins: [
      new HtmlWebpackPlugin({ //creates an index.html file and injects the bundle in the body of the html
        template: path.resolve(__dirname, 'public/index.html'), //this forms the basis of the index.html file mentioned above
        filename: 'index.html',
    }),
  ],
};