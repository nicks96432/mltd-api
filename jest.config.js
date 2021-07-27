module.exports = async () => {
	return {
		preset: "ts-jest",
		slowTestThreshold: 20,
		verbose: true,
	};
};
