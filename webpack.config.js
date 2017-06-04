'use strict';

const webpack = require('webpack');
const path = require('path');
// const db = require('./db.js');
let externals = _externals();
// var babelpolyfill = require("babel-polyfill");
module.exports = {
    context: path.resolve(__dirname, './app'),
    entry: {
        app: './entry.js',
        demo:'./demo/demo.js'
    },
    target: 'node',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },
    resolve: {
        extensions: ['.js',' ']
    },
    externals: externals,
    node: {
        console: true,
        global: true,
        process: true,
        Buffer: true,
        __filename: true,
        __dirname: true,
        setImmediate: true
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'stage-0'],
                plugins: ['transform-runtime']
            },
            exclude: /node_modules/
        },
        {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?limit=8192&name=images/[hash].[ext]'
        },
        {
            test: /\.(webm|mp4|mpeg|ogv)\??.*$/,
            loader: 'file-loader?name=video/[name].[ext]'
        },]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({ //全局常量
            ENV: process.platform == 'linux'?'"pd"':'"dev"',
            // db:db
        }),

    ]
};

function _externals() {
    let manifest = require('./package.json');
    let dependencies = manifest.dependencies;
    let externals = {};
    for (let p in dependencies) {
        externals[p] = 'commonjs ' + p;
    }
    return externals;
}
