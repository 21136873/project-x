const autoprefixer = require('autoprefixer')

module.exports = [{
  	entry: './client/app.scss',
  output: {
    // This is necessary for webpack to compile
    // But we never use style-bundle.js
      filename: './assets/style-bundle.js',
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        {
          loader: 'file-loader',
          options: {
              name: './assets/bundle.css',
          },
        },
        { loader: 'extract-loader' },
        { loader: 'css-loader' },
		{
		  loader: 'postcss-loader',
		  options: {
		    plugins: () => [autoprefixer({ grid: false })]
		  }
		},
        { 
        	loader: 'sass-loader',
        	options: {
        		includePaths: ['./node_modules/']
        	}
        },

      ]
    }]
  },
}];
