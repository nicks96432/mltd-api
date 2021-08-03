const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
    target: "node",
    entry: {
        index: "./src/index.ts"
    },
    externals: [webpackNodeExternals()],
    output: {
        path: path.join(__dirname, "/build"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-typescript",
                            "@babel/preset-env"
                        ],
                        plugins: ["@babel/plugin-transform-runtime"]
                    }
                }
            }
        ]
    },
    resolve: { extensions: [".ts", ".js"] }
};
