const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval', // hidden-source-map
    resolve: {
        extensions: ['.jsx', '.js']
    },
    entry: {
        app: './client',
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: [
                                '> 5% in KR',
                                'last 2 chrome versions',
                            ],
                        }
                    }], 
                    ['@babel/preset-react', {
                        targets: {
                            browsers: [],
                        }
                    }]
                ],
                plugins: [],
            },
        }],
    },
    plugins: [],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
    }
}