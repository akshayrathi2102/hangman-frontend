module.exports = {
  entry: './app.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"]
        }
      },
      {
        test: /\.s[ac]ss/,
        use: ["style-loader", "css-loader", "sass-loader"],
        exclude: /node_modules/,
      }
    ]
  }
}