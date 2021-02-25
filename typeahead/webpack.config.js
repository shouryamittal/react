const HTMLWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HTMLWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html'
})

module.exports = {
    entry: {
        index: "./src/index.js"
    },
    output: {
        filename: '[name][hash].js'
    },
    module: {
        rules:[
            {
                test: /\.(js|jsx)/,
                exclude:/node_modules/,
                use: [{loader:'babel-loader'}]
            },
            {
                test: /\.(css|scss)/,
                use: [{loader:'style-loader'}, {loader: 'css-loader'}, {loader: 'sass-loader'}]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    },
    plugins:[htmlPlugin],
    // devServer: {
    //     historyApiFallback: true,
    //     contentBase: './',
    //     hot: true
    //  }
}