module.exports = config => {
  const tests = "tests/*.test.js";
  process.env.BABEL_ENV = "karma";
  config.set({
    frameworks: ["mocha"],
    files: [
      {
        pattern: tests
      }
    ],
    // Preprocess through webpack
    preprocessors: { [tests]: ["webpack"] },
    singleRun: true,
   
  });
};
