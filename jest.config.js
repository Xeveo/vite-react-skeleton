module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  rootDir: "./",
  roots: ["<rootDir>/tests"],
  clearMocks: true,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/config/jest/jest-setup.js"],
  transform: {
    "^.+\\.[jt]sx?$": "ts-jest",
  },
};
