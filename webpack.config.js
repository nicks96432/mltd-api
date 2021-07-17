const path = require("path");
const nodeExternals = require("webpack-node-externals");
const NodemonPlugin = require("nodemon-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const DocConfig = {
	mode: "production",
	target: "node",
	entry: {
		index: "./doc/src/index",
	},
	output: {
		path: path.join(__dirname, "/build/static"),
		filename: "[name].bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: { loader: "babel-loader" },
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({ template: "./doc/public/index.html", inject: false }),
		new CopyPlugin({
			patterns: [
				{
					from: "./doc/public",
					to: "./",
					globOptions: {
						ignore: ["**/*.html"],
					},
				},
			],
		}),
		new MiniCssExtractPlugin(),
	],
};

const ServerConfig = {
	target: "node",
	entry: {
		index: "./src/index",
	},
	externals: [nodeExternals()],
	output: {
		path: path.join(__dirname, "/build/server"),
		filename: "[name].bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: "babel-loader",
			}
		],
	},
};

if (process.env.NODE_ENV === "development") ServerConfig.plugins=[new NodemonPlugin()];

module.exports = [DocConfig, ServerConfig];
