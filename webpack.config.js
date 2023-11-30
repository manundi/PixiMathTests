// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const stylesHandler = 'style-loader';

const pages = ["index", "trigonometry"];

const config = {
    entry: pages.reduce((config, page) => {
        config[page] = `./src/${page}.ts`;
        return config;
      }, {}),
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].bundle.js',
    },
    devServer: {
        open: true,
        host: 'localhost',
        static: {
            directory: path.join(__dirname, 'dist'),
        },
    },
    plugins: [].concat(
        pages.map(
          (page) =>
            new HtmlWebpackPlugin({
              inject: true,
              template: `./${page}.html`,
              filename: `${page}.html`,
              chunks: [page],
            })
        )
      ),
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader'],
            },


            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/d
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.mjs', '.json','.svg', '...'],
    },
};

module.exports = () => {
    config.mode = 'development';
    return config;
};
