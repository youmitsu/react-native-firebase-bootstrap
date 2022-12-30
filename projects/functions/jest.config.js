module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleFileExtensions: ["js", "ts"],
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.json",
    },
  },
  testMatch: ["**/*.test.ts"],
  setupFilesAfterEnv: ["./test/setup.js"],
};
