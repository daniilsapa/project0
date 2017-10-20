const webpack = require('webpack');
module.exports = {
    context: __dirname,
    entry: {
        app: './app.js',
    },
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
    }
};