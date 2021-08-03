const { merge } = require("webpack-merge");
const NodemonWebpackPlugin = require("nodemon-webpack-plugin");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development",
    plugins: [new NodemonWebpackPlugin()],
    devtool: "source-map"
});
