const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV;

const plugins = [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'  
    }),
    new HtmlWebpackPlugin({
        template: './src/index.html'
    })
];

module.exports = {
    target: env === "production" ? "browserslist" : "web",
    plugins,
    devtool: "source-map",
    entry: "./src/components/index.tsx",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: '[name].bundle.js',
        publicPath: "/dist/",
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean: true
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    
    devServer: {
        static: {
            directory: path.join(__dirname, "./src")
        },
        hot: true
    },
    
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-typescript', '@babel/preset-react'],
                }
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                ident: "postcss",
                                plugins: ['postcss-preset-env']
                            } 
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
                type: env === 'production' ? 'asset' : 'asset/resource'
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/resource'
            }
        ]
    }
};