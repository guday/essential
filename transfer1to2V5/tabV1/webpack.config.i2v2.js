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
          loader: 'babel-loader',
          // include: [
          //   path.join(__dirname, 'www_I2'),
          //   path.join(__dirname, 'i2Transfer'),
          // ]
        },
        {
          test: /\.html$/,
          loader: 'raw-loader'
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
