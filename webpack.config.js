module.exports = {
    entry: "./app/javascripts/index.js",
    output: {
        path: './app/javascripts',
        filename: "build.js"
    },
    module: {
      loaders: [
        { test: /\.css$/, loader: "style!css" },
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
        { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel', query: {presets: ['es2015', 'react']}}
      ]
    }
};
