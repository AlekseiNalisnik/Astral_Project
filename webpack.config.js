const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: "development",
    output: {
        filename: 'main.js',
      },
      devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        watchContentBase: true,
        progress: true
      },

      module: {
        rules: [
          {
            test: /\.(js|jsx)?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader?optional[]=runtime',
              options: {
                presets: [
                  ["@babel/env", {
                    targets: {
                      edge: "17",
                      firefox: "60",
                      chrome: "67",
                      safari: "11.1",
                      ie: "11"
                    }
                  }]
                ],
                plugins: ["es6-promise"]
              }
            }
          },
          {
            test: /\.css$/,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: {
                  modules: true
                }
              }
            ]
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: ["file-loader"]
          }
        ]
      }
}