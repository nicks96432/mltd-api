const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");
const NodemonWebpackPlugin = require("nodemon-webpack-plugin");

const Config = {
	target: "node",
	entry: {
		index: "./src/index.ts",
	},
	externals: [webpackNodeExternals()],
	output: {
		path: path.join(__dirname, "/build"),
		filename: "[name].bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-typescript", "@babel/preset-env"],
						plugins: ["@babel/plugin-transform-runtime"],
					},
				},
			},
		],
	},
	resolve: { extensions: [".ts", ".js"] },
	plugins: [],
};

module.exports = (_env, options) => {
	if (options.mode === "development") {
		Config.plugins.push(new NodemonWebpackPlugin());
		Config.devtool = "source-map";
	}
	return Config;
};
