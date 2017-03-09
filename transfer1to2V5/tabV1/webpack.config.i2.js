var path = require('path');

//a1 + middle

module.exports = function () {

  return ({
    entry: {
      I2: './www_I2/index.js',
    },
    output: {
      path: path.join(__dirname, './www/build'),
      filename: 'bundle[name].js'
    },
    devtool: "source-map",
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader!hj-app-transform-loader',
          // include: [
          //   path.join(__dirname, 'www_I2'),
          //   path.join(__dirname, 'middle'),
          // ]
        },
        {
          test: /\.html$/,
          loader: 'raw-loader!hj-app-transform-html-loader'
        }
      ]
    },
    // require 文件时可省略后缀 .js 和 .ts
    resolve: {
      modules: [
        path.join(__dirname, 'www_I2'),
        "node_modules"
      ],
      extensions: ['.js', '.ts']
    }


  })
};
