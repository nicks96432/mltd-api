const path = require("path");
const nodeExternals = require("webpack-node-externals");
const NodemonPlugin = require("nodemon-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const DocConfig = {
	target: "node",
	entry: {
		index: "./docs/src/index",
	},
	output: {
		path: path.join(__dirname, "/build/static/docs"),
		filename: "[name].bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: { presets: ["@babel/preset-typescript", "@babel/preset-env"] },
				},
			},
			{
				test: /\.tsx$/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							"@babel/preset-typescript",
							"@babel/preset-react",
							"@babel/preset-env",
						],
					},
				},
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({ template: "./docs/public/index.html" }),
		new CopyPlugin({
			patterns: [
				{
					from: "./docs/public",
					to: "./",
					globOptions: {
						ignore: ["**/*.html"],
					},
				},
			],
		}),
		new MiniCssExtractPlugin(),
	],
	resolve: { extensions: [".ts", ".tsx", ".js", ".jsx"] },
};

const ServerConfig = {
	target: "node",
	entry: {
		index: "./src/index.ts",
	},
	externals: [nodeExternals()],
	output: {
		path: path.join(__dirname, "/build/server"),
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
					},
				},
			},
		],
	},
	resolve: { extensions: [".ts"] },
};

module.exports = (_env, options) => {
	if (options.mode === "development")
		ServerConfig.plugins = [
			new CopyPlugin({ patterns: [{ from: "./.env", to: "../" }] }),
			new NodemonPlugin(),
		];
	return [DocConfig, ServerConfig];
};
