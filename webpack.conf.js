var path = require('path');
var folder = path.join(__dirname, "/example");

module.exports = {
  context: __dirname,
  entry: path.join(folder, "bundle.js"),
  output: {
    path: path.join(folder),
    filename: "bundle.out.js"
  },

  module: {
    loaders: [
      { test: /\.tag$/, loader: "riot-loader" }
    ],
  }
}
