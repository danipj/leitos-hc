module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js',
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
  }
};