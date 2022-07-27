const webpack = require('webpack');
const { merge } = require('webpack-merge');
const config = require('./webpack.config')

const devConfig = {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new webpack.DefinePlugin({
            "API_URL": JSON.stringify("http://localhost:8080")
        })
    ],
};

module.exports = merge(config, devConfig);
