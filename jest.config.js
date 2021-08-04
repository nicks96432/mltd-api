module.exports = async () => {
    return {
        preset: "ts-jest",
        slowTestThreshold: 30,
        verbose: true
    };
};
