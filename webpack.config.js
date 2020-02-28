var ExtraWatchWebpackPlugin = require('extra-watch-webpack-plugin');
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    plugins: [
        new ExtraWatchWebpackPlugin({
            files: ['./index.html'],
            // dirs: ['path/to/dir'],
        }),
        new LiveReloadPlugin()
    ]
}

