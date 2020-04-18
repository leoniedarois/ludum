const path = require('path')
var LiveReloadPlugin = require('webpack-livereload-plugin')
const CopyPlugin = require('copy-webpack-plugin')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

var definePlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
    WEBGL_RENDERER: true,
    CANVAS_RENDERER: true,
})

module.exports = {
    entry: {
        game: './src/app.ts',
        ui: './src/ui/index.tsx',
    },
    mode: 'development',
    devtool: "inline-source-map",
    target: 'web',
    devServer: {
        writeToDisk: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: [
                    'file-loader'
                ]
            },

            {
                test: /\.scss$/,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    'sass-loader', // compiles Sass to CSS, using Node Sass by default
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
        definePlugin,
        new LiveReloadPlugin(),
        new CopyPlugin([
            { from: 'src/index.html' },
            {
                context: "src/assets",
                from: '**/*',
                to: 'assets'
            },
        ]),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
        new CleanWebpackPlugin(),
    ],
}
