const path = require('path');

module.exports = {
    name: 'NumBaseBall-setting',
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: {
        app: ['./client'],
    },

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            option: {
                presets:[
                    ['@babel/preset-react', {
                        targets: {
                            browsers: [
                                '> 5% in KR',
                                'last 2 chrome versions',
                            ],
                        }
                    }], 
                    '@babel/preset-env'
                ]
            }
        }]
    },
    plugins: [

    ],
    output: {
        path: path.join(__dirname, 'dist'),
        fileName: 'app.js'
    }
}