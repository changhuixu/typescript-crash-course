const path = require('path');

module.exports = {
    entry: './src/main',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: [
            '.ts',
        ],
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist'),
    },
};

