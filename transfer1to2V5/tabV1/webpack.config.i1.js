var path = require('path');

//a1 + middle

module.exports = function () {

  return ({
    entry: {
      Middle: './middle/app.js',
    },
    output: {
      path: path.join(__dirname, './www'),
      filename: 'bundle[name].js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: [
            path.join(__dirname, 'middle')
          ]
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
        path.join(__dirname, 'middle'),
        "node_modules"
      ],
      extensions: ['.js', '.ts']
    }


  })
};
