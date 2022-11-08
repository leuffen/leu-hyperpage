const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        '_includes/dist/style_embed': './src/style_embed.scss',
        'assets/dist/style': './src/style.scss',
        'assets/dist/index': './src/index.ts',
        '_includes/dist/index_embed': './src/index_embed.ts'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },

            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },


        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devtool: 'source-map',


    plugins: [

        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: "[name].css",
          chunkFilename: "[id].css",
        }),


    ],

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'docs/'),
    },
};
