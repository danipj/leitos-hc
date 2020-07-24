module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      { 
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
};