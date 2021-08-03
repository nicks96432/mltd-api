const { merge } = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    }
});
