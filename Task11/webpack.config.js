const path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // click on the name of the option to get to the detailed documentation
    // click on the items with arrows to show more examples / advanced options

    entry: {
        app: path.resolve(__dirname, "src") + "/app.js"
    },


    output: {
        path: path.resolve(__dirname, "build"), // string

        filename: "bundle.js", // string
    },

    module: {

        rules: [
            { test: /\.js$/, loader: "babel-loader", options: {} },
            { test: /\.html$/, loader: "html-loader", options: {} }
        ]
    },


    devtool: "source-map",


    devServer: {
        port: 3000
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}