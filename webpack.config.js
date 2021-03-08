// webpack.config.js

const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries')
const TerserJSPlugin = require('terser-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {

  entry: {
    script: ['./src/js/scripts.js'],
    style: ['./src/scss/style.scss']
  },
  devServer: {
    historyApiFallback: true
  },
  output: {
    path: path.resolve(__dirname, 'assets')
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        loader: 'file-loader',
        options: {
          outputPath: 'icons',
          name: '[name].[ext]'
        }
      },
      {
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					'babel-loader',
					'eslint-loader',
				],
			},
			{
				test: /\.vue$/,
				exclude: /node_modules/,
				use: [
					'vue-loader'					
				],
			},
      {
        test: /\.(png|jpe|jpg|gif)(\?.*$|$)/,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
          name: '[name].[ext]'
        }
      },
      {
        test: /\.(sa|sc)ss$/,
        exclude: /node_modules/,
        use: [
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader', // translates CSS into CommonJS
          {
            loader: 'postcss-loader',
            ident: 'postcss',
            options: {
              plugins: [
                require('autoprefixer')({
                  'Browserslist': ['> 1%', 'last 2 versions']
                })
              ]
            }
          },
          'sass-loader' // compiles Sass to CSS
        ]
      }
    ]
  },
  plugins: [
    new FixStyleOnlyEntriesPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
      'window.Popper': 'Popper'
    }),
    new CopyWebpackPlugin([
      { from: __dirname + '/assets/images/', to: 'images', test: /\.(png|jpeg|jpg|gif)$/i },
      { from: __dirname + '/assets/fonts/', to: 'fonts', test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/ }
    ])
  ],
  resolve: {
    extensions: ['*', '.js', '.vue', '.json']
  }
}
