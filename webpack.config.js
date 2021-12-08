'use strict';

const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const path = require('path');

const webpack = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        cryptoPrice: './src/cryptoPrice.js'
    },
    output: {
        filename: '[name].bundled.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource'}
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: {baseDir: ['dist']}
        })
    ]
}

module.exports = webpack;