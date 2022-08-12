const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let mode = "development";
let target = "web";
const env = process.env.NODE_ENV;

const plugins = [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: "css/[name].css"
    }),
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        favicon: "./src/assets/icons/favicon.ico"
    })
];

if (process.env.NODE_ENV === "production") {
    mode = "production";
    target = "browserslist";
}

if (process.env.SERVE) {
    plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
    mode: mode,
    target: target,
    plugins: plugins,
    devtool: "source-map",
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        filename: "[name].bundle.js",
        assetModuleFilename: "assets/[hash][ext][query]"
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: {
            "@kbaw": path.join(__dirname, "src"),
            "@components": path.join(__dirname, "src/components"),
            "@routes": path.join(__dirname, "src/routes"),
            "@typings": path.join(__dirname, "src/typings"),
            "@resources": path.join(__dirname, "src/resources")
        }
    },

    devServer: {
        historyApiFallback: true,
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
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true
                    }
                }
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                ident: "postcss",
                                plugins: ["postcss-preset-env"]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
                type: env === "production" ? "asset" : "asset/resource"
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: "asset/resource"
            }
        ]
    }
};
