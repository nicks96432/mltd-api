module.exports = async () => {
	return {
		preset: "ts-jest",
		slowTestThreshold: 10000,
		testEnvironment: "node",
	};
};
