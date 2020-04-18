const path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './index.js',
    devtool: 'inline-source-map',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin([
            {from:'assets',to:'assets'},
            'index.html'
        ]), 
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true
    }
};