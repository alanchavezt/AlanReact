const webpack = require('webpack');
const { merge } = require('webpack-merge');
const config = require('./webpack.config')

const prodConfig = {
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            "process.env.API_URL": JSON.stringify("https://alanchavezt.com")
        })
    ],
};

module.exports = merge(config, prodConfig);
