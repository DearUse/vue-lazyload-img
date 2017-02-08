var path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'bin'),
        filename: 'build.js',
        // export itself to a global var
        libraryTarget: "umd",
        // name of the global var: "GomeUIKit"
        library: "Lazyload"
    },
    externals: {
        'vue': 'Vue',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
        ]
    },
    
}