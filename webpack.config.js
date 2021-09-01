const webpack = require('webpack');
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );
const DefinePlugin = webpack.DefinePlugin;

const port = process.env.PORT || 3000;

module.exports = {
    mode: 'development',
    context: __dirname,
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + 'dist',
        publicPath: "/"
    },
    devtool: 'inline-source-map',
    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: false
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
            },
            {
                test: /\.jsx$/,
                use: ['babel-loader']
            },
            {
                test: /\.tsx?$/,
                use: ['babel-loader']
            },
            {
                test: /\.ttf$/,
                use: ['file-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|j?g|svg|gif)?$/,
                use: 'file-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                exclude: /\.html$/
            }
        ]
    },
    resolve: {
        symlinks: false,
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new DefinePlugin({
            "foo": JSON.stringify("bar-dev"),
            "API_URL": JSON.stringify('https://www.alanchavez-dev.com/')
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html'
        })
    ]
};
