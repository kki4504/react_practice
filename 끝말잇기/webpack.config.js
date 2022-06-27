const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    name: 'wordRelay-setting',
    mode: 'development', // 실서비스 : production
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx'] // entry app에 확장자를 알아서 찾아줌
    },

    entry: {
        app: ['./client'],
    }, // 입력

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                          browsers: [
                            '> 5% in KR',
                            'last 2 chrome versions',
                          ],
                        },
                        debug: true,
                      }], 
                      ['@babel/preset-react', {
                        targets: {
                          browsers: [],
                        }
                      }]
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-refresh/babel'
                ]
            },
        }],
    },
    plugins: [
            new RefreshWebpackPlugin(),
            // new webpack.LoaderOptionsPlugin({ debug: true }),
        ],

    output: {
        // 경로합치기
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: './dist/',
    }, // 출력
    devServer: {
        // publicPath: './dist/',
        devMiddleware: { publicPath: '/dist' },
        static: { directory: path.resolve(__dirname) },
        hot: true
    },
};