var path = require("path");
var autoprefixer = require('autoprefixer')


module.exports = {
  entry: [
    path.resolve(__dirname, "./app.js"),
    path.resolve(__dirname, "./app.scss"),
  ],
  output: {
    path: path.resolve(__dirname, "../assets"),
    filename: "bundle.js",
    publicPath: "/build/",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'bundle.css' }
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()]
            }
          },
          { 
            loader: 'sass-loader', 
            options: {
              includePaths: ['./node_modules']
            }
          },
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: { presets: [ 'es2015' ] }
      }
    ]
  }

};

