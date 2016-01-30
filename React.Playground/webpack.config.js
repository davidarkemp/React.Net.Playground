/// <binding ProjectOpened='Watch - Development' />
"use strict";
var path = require('path');

module.exports = {
    context: path.join(__dirname, 'Scripts'),
    entry: {
        server: './server.js'
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: "./[name].bundle.js"
    },

    resolve: {
        // Allow require('./blah') to require blah.jsx
        extensions: ['', '.js', '.jsx']
    },
    externals: {
        // Use external version of React (from CDN for client-side, or
        // bundled with ReactJS.NET for server-side)
        react: 'React'
    },
    module: {
        loaders: [
            // Transform JSX in .jsx files
            {
                test: /\.jsx?$/,
                exclude: /node_modules|bower_components/,
                loader: 'babel',
                query: { presets: ['react', 'es2015'] }
            }
        ]
    }
}