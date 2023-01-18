module.exports = {
  preset: "ts-jest",
  testRegex: "/tests/unitTests/.*.tests.ts$",
  testEnvironment: "node",
  coverageReporters: ["text", "lcov"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  collectCoverageFrom: ["<rootDir>/src/**"],
  coveragePathIgnorePatterns: [],
  clearMocks: true,
};